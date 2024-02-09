
from flask import Flask, render_template, jsonify, request, send_from_directory
from plot import generate_category_plot_json
import plotly.express as px
import plotly.io as pio
import os

app = Flask(__name__)

# Sample data, replace this with your actual data
sample_data = {
    "Menu_Item_About": {"chartType": "line"},
    "Menu_Item_Visualization": {"chartType": "bar"},
    "Menu_Item_Solution": {"chartType": "pie"},
}

text_file_path = "project/text_data/{}.txt"

@app.route("/home.html")
def home():
    return render_template("home.html")


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_chart_data")
def get_chart_data():
    # Get the menu item from the request parameters
    menu_item = request.args.get("menuItem")

    # Process data based on the menu item (replace with your actual logic)
    # chart_data = process_data_for_menu_item(menu_item)

    # Generate the chart data
    # chart_json = generate_chart_data(chart_data,menu_item)
    chart_json  = generate_category_plot_json()
    return jsonify({"chartData": chart_json})

@app.route("/get_text_data")
def get_text_data():
    menu_item = request.args.get("menuItem")
    text_path = f'project/text_data/{menu_item.replace(" ", "_")}.txt'

    with open(text_path, "r", encoding="utf-8") as file:
        text_data = file.read()

    return text_data




def process_data_for_menu_item(menu_item):
    # Sample data processing, replace with your actual logic
    return sample_data.get(menu_item, {"chartType": ""})

def generate_chart_data(chart_data, menu_item):
    # Sample data, replace with your actual data processing logic
    x_values = [1, 2, 3, 4]
    y_values = [10, 11, 12, 13]

    chart_type = chart_data.get("chartType", "line")

    if chart_type == "line":
        chart = {
            "data": [{"x": x_values, "y": y_values, "type": "line"}],
            "layout": {
                "title": "Line Chart",
                "height": 400,  # Adjust the height as needed
                "width": 600,   # Adjust the width as needed
                 "margin": {"l": 50, "r": 50, "t": 50, "b": 50},  # Adjust margin values
                # Add other layout properties as needed
            }
        }
    elif chart_type == "bar":
        chart = {
            "data": [{"x": x_values, "y": y_values, "type": "bar"}],
            "layout": {
                "title": "Bar Chart",
                "height": 400,
                "width": 600,
                 
                # Add other layout properties as needed
            }
        }
    elif chart_type == "pie":
        chart = {
            "data": [{"labels": x_values, "values": y_values, "type": "pie"}],
            "layout": {
                "title": "Pie Chart",
                "height": 400,
                "width": 600,
                 "margin": {"l": 50, "r": 50,},  # Adjust margin values
                # Add other layout properties as needed
            }
        }
    else:
        # Handle other chart types if needed
        chart = {"data": [], "layout": {}}

    return chart


def read_text_data(menu_item):
    file_path = text_file_path.format(menu_item.replace(" ", "_"))
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()

if __name__ == "__main__":
    app.run(debug=True)

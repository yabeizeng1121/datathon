
import pandas as pd
import numpy as np
import plotly.express as px
import json

def generate_category_plot_json():
    # Load your dataset
    data = pd.read_csv("Entry_data_nlp.csv")
    # Plot generation as before
    bar_color = ['#6E750E', '#D55E00', '#0072B2', '#E69F00']
    category_counts = data['NLP_Category'].value_counts().reset_index()
    category_counts.columns = ['Category', 'Frequency']
    fig = px.bar(category_counts, x='Category', y='Frequency', title="Category Frequency", labels={'Category': 'Category', 'Frequency': 'Frequency'}, color='Category', color_discrete_sequence=bar_color)
    fig.update_layout(width=800, height=600)

    # Convert figure to JSON
    plot_json = json.loads(fig.to_json())

    return plot_json

def generate_response_rate_pie_chart_json():
    # Assuming 'data' is your DataFrame loaded elsewhere with necessary preprocessing
    # Example: data = pd.read_csv('path_to_your_data.csv')

    # Your code snippet for calculating average response rate by category
    data = pd.read_csv("Entry_data_nlp.csv")
    response_rate_by_category = data.groupby('NLP_Category')['Response Rate(%)'].mean().reset_index()

    # Create a pie chart using Plotly Express
    fig = px.pie(response_rate_by_category, 
                 names='NLP_Category', 
                 values='Response Rate(%)', 
                 title='Average Response Rate by Job Category')

    # Adjust the figure layout if desired
    fig.update_layout(width=600, height=400)

    # Convert the figure to JSON format
    plot_json = json.loads(fig.to_json())

    return plot_json

def generate_employment_rate_pie_chart_json():
    # Ensure 'data' is your DataFrame with necessary preprocessing
    # Example: data = pd.read_csv('path_to_your_data.csv')

    # Specify pie chart colors
    data = pd.read_csv("Entry_data_nlp.csv")
    pie_color = ['#009E73', '#F0E442', '#CC79A7', '#56B4E9']
    
    # Clean the data
    data_clean = data[data["Employment"] != "*"]
    data_clean['Employment'] = data_clean['Employment'].str.replace(',', '').astype(int)

    # Calculate average employment by category
    response_rate_by_category = data_clean.groupby('NLP_Category')['Employment'].mean().reset_index()

    # Create a pie chart
    fig = px.pie(response_rate_by_category, 
                 names='NLP_Category', values='Employment', 
                 title='Average Employment Rate by Job Category',
                 color_discrete_sequence=pie_color)

    # Adjust the figure layout if desired
    fig.update_layout(width=600, height=400)
    fig.update_layout(margin=dict(l=50, r=50))
    # Convert the figure to JSON format
    plot_json = json.loads(fig.to_json())

    return plot_json
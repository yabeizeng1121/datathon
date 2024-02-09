
// async function fetchDataAndShow(menuItem) {
//     // Fetch data from the server
//     const response = await fetch(`get_plot_data?menuItem=${menuItem}`);
//     const data = await response.json();
//     showmenutitle(menuItem);
//     // Show the chart in the main content
//     // showChart(data.imageUrl);
//     showMixChartText(data);
//     // Fetch text data from the server
//     const textResponse = await fetch(`/get_text_data?menuItem=${menuItem}`);
//     const textData = await textResponse.text();

//     // Show text data
//      showText(textData);
// }

async function fetchDataAndShow(menuItem) {
    // Fetch data from the server
    const response = await fetch(`get_chart_data?menuItem=${menuItem}`);
    const data = await response.json();
    
    // // Hide the <h1> and <p> elements in the main content
    // hideMainContent();
    // // Show the chart in the main content
    // showChart(data.chartData);

    // // Fetch text data from the server
    // const textResponse = await fetch(`/get_text_data?menuItem=${menuItem}`);
    // const textData = await textResponse.text();

    // // Show text data
    // showText(textData);
    Switch_MenuItemTo_Show(menuItem);
}

function Switch_MenuItemTo_Show(menuItem) {
    showmenutitle(menuItem);
    // Hide all main content elements
    hideMainContent();
    if (menuItem == "Menu_Item_About") {
        showAbout(menuItem);
    }
    else if (menuItem == "Menu_Item_Visualization") {
        showVisualization(menuItem);
    }
    else if (menuItem == "Menu_Item_Solution") {
        showSolution(menuItem);
    }
    
}
    
function showAbout(Menu_Item) {
    const mainContent = document.getElementById('chart-container');
    // Hide the <h1> and <p> elements in the main content
    
    showmenutitle("Menu_Item_About");
    showText(Menu_Item);
}

function showVisualization(Menu_Item) {
    const mainContent = document.getElementById('chart-container');
    const imageUrl_1 = `/static/images/plot/chart_1.png`;
    const imageUrl_2 = `/static/images/plot/chart_2.png`;
    const imageUrl_3 = `/static/images/plot/chart_3.png`;
    const imageUrl_4 = `/static/images/plot/chart_4.png`;
    const imageUrl_5 = `/static/images/plot/chart_5.png`;
    const imageUrl_6 = `/static/images/plot/chart_6.png`;
    const imageUrl_7 = `/static/images/plot/chart_7.png`;
    const imageUrl_8 = `/static/images/plot/chart_8.png`;
    const imageUrl_9 = `/static/images/plot/chart_9.png`;
    // Hide the <h1> and <p> elements in the main content
   
    showmenutitle(Menu_Item);
    
    mainContent.innerHTML =`
    <div style="display: flex; justify-content: center; flex-direction: column;">
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_1}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_2}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_3}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_4}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_5}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_6}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_7}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_8}" alt="Chart"></img>
        </div>
        <div style = "margin-top:2vw;">
            <img src="${imageUrl_9}" alt="Chart"></img>
        </div> 
    </div>
    `;
}
{/* <p>this area shows the picture 1 info</p>
<br>
<p>this is the main information for image 1</p> */}
{/* <p>this area shows the picture 2 info</p>
            <br>
            <p>this is the main information for image 2</p> */}
function showSolution(Menu_Item) {
    const mainContent = document.getElementById('chart-container');
    // Hide the <h1> and <p> elements in the main content
    
    showmenutitle("Menu_Item_Solution");
    showText(Menu_Item);
}

// function showChart(imageUrl) {
//     // Assuming you want to display an image
//     const mainContent = document.getElementById('chart-container');
//     mainContent.innerHTML = `
//     <div>
//         <img src="${imageUrl}" alt="Chart">
//     </div>`;
// }


function showChart(chartData) {
    const mainContent = document.getElementById('chart-container');
    
    // Use Plotly.js to render the chart in the main content
    Plotly.react(mainContent, chartData);
}


function showText(textData) {
    // Show text data
    const textContainer = document.getElementById('text-container');

    if (textContainer && textData) {
        textContainer.innerHTML = `<p>${textData}</p>`;
        // textContainer.innerHTML = '<p>this is a test !!!</p>'
    }
}


function showmenutitle(itemName){
    const menuTitle = document.getElementById('menu-title');
    if(itemName == "Menu_Item_About")
    {
        menuTitle.innerHTML = `<h3> About & issue </h3>`
    }
    else if(itemName == "Menu_Item_Visualization")
    {
        menuTitle.innerHTML = `<h3> Visualization & Modeling </h3>`
    }
    else if(itemName == "Menu_Item_Solution")
    {
        menuTitle.innerHTML = `<h3> Data & Analysis </h3>`
    }
    
}
// hide h1 label and p label
function hideMainContent() {
    const mainContent = document.getElementById('chart-container');

    // Get references to <h1> and <p> elements
    const h1Element = mainContent.querySelector('h1');
    const pElement = mainContent.querySelector('p');

    // Set display:none to hide the elements
    if (h1Element) {
        h1Element.style.display = 'none';
    }

    if (pElement) {
        pElement.style.display = 'none';
    }
}
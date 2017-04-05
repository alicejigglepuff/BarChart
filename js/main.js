google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Year", "Number", { role: "style" } ],
        ["1992", 0, "#b87333"],
        ["1996", 194, "silver"],
        ["2000", 558, "gold"],
        ["2004", 671, "color: #e5e4e2"],
        ["2008", 430, "fba55a"],
        ["2012", 13392, "d6bfab"],
        ["2016", 42011,"orange"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Growth of U.S. Electric Fueling Stations from 1992 to 2016",
        width: 800,
        height: 480,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
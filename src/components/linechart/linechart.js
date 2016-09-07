var { Bar } = require('vue-chartjs');

// Bar.defaults = {
//   scaleOverlay: false,
//   scaleOverride: false,
//   scaleSteps: null,
//   scaleStepWidth: null,
//   scaleStartValue: null,
//   scaleLineColor: "rgba(0,0,0,.1)",
//   scaleLineWidth: 1,
//   scaleShowLabels: false,
//   scaleLabel: "<%=value%>",
//   scaleFontFamily: "'Arial'",
//   scaleFontSize: 12,
//   scaleFontStyle: "normal",
//   scaleFontColor: "#666",
//   scaleShowGridLines: true,
//   scaleGridLineColor: "rgba(0,0,0,.05)",
//   scaleGridLineWidth: 1,
//   barShowStroke: true,
//   barStrokeWidth: 2,
//   barValueSpacing: 5,
//   barDatasetSpacing: 1,
//   animation: true,
//   animationSteps: 60,
//   animationEasing: "easeOutQuart",
//   onAnimationComplete: null
// }

var BarChart = Bar.extend({
  props: ['data', 'options'],
  ready () {
    this.render(this.data, {
      barValueSpacing: 0
    });
  }
});

module.exports = BarChart;
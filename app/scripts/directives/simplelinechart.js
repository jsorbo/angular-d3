'use strict';

/**
 * @ngdoc directive
 * @name angularD3App.directive:simpleLineChart
 * @description
 * # simpleLineChart
 */
angular.module('angularD3App')
  .directive('simpleLineChart', ['d3Service', function (d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {
        d3Service.d3().then(function (d3) {

          var margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = 600 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;

          var parseDate = d3.timeParse('%d-%b-%y');

          var x = d3.scaleTime()
            .range([0, width]);

          var y = d3.scaleLinear()
            .range([height, 0]);

          // var xAxis = d3.svg.axis()
          //   .scale(x)
          //   .orient('bottom');

          // var yAxis = d3.svg.axis()
          //   .scale(y)
          //   .orient('left');

          var line = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.close); });

          var svg = d3.select(element[0]).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

          // Hard coded data
          scope.data = [
            { date: '4-Apr-12', close: 34 },
            { date: '5-Apr-12', close: 45 },
            { date: '6-Apr-12', close: 37 },
            { date: '7-Apr-12', close: 56 },
            { date: '8-Apr-12', close: 50 },
            { date: '9-Apr-12', close: 77 }
          ];

          scope.data.forEach(function (d) {
            d.date = parseDate(d.date);
            d.close = +d.close;
          });

          x.domain(d3.extent(scope.data, function (d) { return d.date; }));
          y.domain(d3.extent(scope.data, function (d) { return d.close; }));

          svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x));

          svg.append('g')
            .attr('class', 'y axis')
            .call(d3.axisLeft(y))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Price ($)');

          svg.append('path')
            .datum(scope.data)
            .attr('class', 'line')
            .attr('d', line);
        });
      }
    };
  }]);
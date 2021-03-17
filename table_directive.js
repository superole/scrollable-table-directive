/**
 * theaders er et objekt med kolonnenavn og -bredder
 * tbody trenger større fleksibiltet og bør nok derfor transcluderes inn
 */
angular.module("directive.scrollable.table", []).directive("scrollableTable", function() {
  "use strict";
  return {
    restrict: 'EA',
    scope: {
      theaders:'=',
      tfooter:'=',
    },
    
    link: function(scope, element, attrs, ctrl, transclude) {
      element.find('tbody').replaceWith(transclude());
      var tdArr = element.find('tbody').find('tr').eq(0).children();
      angular.forEach(scope.theaders, function(thObj, i){
        if (i+1 < tdArr.length) {
          angular.element(tdArr[i]).css('width', thObj.width);
        } else {
          angular.element(tdArr[i]).css('width', 'calc('+thObj.width+' - 17px)');
        }
      });
    },
    templateUrl: 'table_directive.tpl.html',
    replace: true,
    transclude: true
    /*{
      header: '?thead',
      body: 'tbody'
    }*/
  };
});

/*
eqHeight.coffee v1.2.7
*/


(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    eqHeight: function(column_selector, equalize_interval) {
      if (equalize_interval == null) {
        equalize_interval = 500;
      }
      return this.each(function() {
        var columns, equalizer, infinite_equalizing, start_equalizing, timer, _equalize_marked_columns;
        columns = $(this).find(column_selector);
        timer = null;
        if (columns.length === 0) {
          columns = $(this).children(column_selector);
        }
        if (columns.length === 0) {
          return;
        }
        _equalize_marked_columns = function() {
          var marked_columns, max_col_height;
          marked_columns = $(".eqHeight_row");
          max_col_height = 0;
          marked_columns.each(function() {
            return max_col_height = Math.max($(this).height(), max_col_height);
          });
          marked_columns.height(max_col_height);
          return $(".eqHeight_row").removeClass("eqHeight_row");
        };
        equalizer = function() {
          var row_top_value;
          columns.height("auto");
          row_top_value = columns.first().position().top;
          columns.each(function() {
            var current_top;
            current_top = $(this).position().top;
            if (current_top !== row_top_value) {
              _equalize_marked_columns();
              row_top_value = $(this).position().top;
            }
            return $(this).addClass("eqHeight_row");
          });
          return _equalize_marked_columns();
        };
        start_equalizing = function() {
          clearTimeout(timer);
          return timer = setTimeout(equalizer, 100);
        };
        infinite_equalizing = function(equalize_interval) {
          equalizer();
          return timer = setTimeout(infinite_equalizing, equalize_interval);
        };
        $(window).load(equalizer);
        if (typeof equalize_interval === "number") {
          return infinite_equalizing(equalize_interval);
        } else {
          return $(window).resize(start_equalizing);
        }
      });
    }
  });

}).call(this);


(function($, w) {
    "use strict";

    // prettify the code listings
    prettyPrint();

    // just for fun...
    $('#link').on('click', function(e){
        var rand = '#'+Math.floor(Math.random()*16777215).toString(16);
        $(e.delegateTarget).css('background',rand);
    });

    // generate the table of contents from html headings
    function getToc() {
        //var headings = $('h2,h3,h4,h5'),
        var headings = $('h2,h3'),
        level = 0,
        tag = 'ol',
        html = '<' + tag + '>';

        $.each(headings, function(i,e) {

            var level = e.tagName.substr(1),
                nextLevel = (i+1 !== headings.length) ? headings[i+1].tagName.substr(1) : '2',
                link = '<a class="lvl' + level + '" href="#' + e.id + '">' + e.innerHTML + '</a>';

            if (level === nextLevel) {
                html+= '<li>' + link + '</li>';
            }
            else if (level < nextLevel) {
                html+= '<li>' + link + '<' + tag + '>';
            }
            else if (level > nextLevel) {
                html+= '<li>' + link + '</li>';
                html+= (new Array(level - nextLevel + 1)).join('</' + tag + '></li>');
            }

        });

        html+= '</' + tag + '>';

        return html;
    }

    var toc = getToc();
    $('#navigation').html(toc).after('<hr />');

    // do some usability
    $('h3').before('<a href="#navigation" class="menu" title="Zum Inhaltsverzeichnis">&#x2261</a>'); 

})(window.jQuery||window.Zepto, window);
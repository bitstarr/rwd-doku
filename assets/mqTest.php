<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
<head>
	<title>Media Queries</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <style type="text/css">
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, aside, canvas, details, embed, summary { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline }
button, input, select, textarea { font:99% sans-serif }
body { font: 1em/1.4 Helmet, Freesans, sans-serif }
h1, h2 { font-weight: 700 }
h1 { font-size: 1.6em }
h1, h2 { margin: 0 0 .3em }
kbd { font-family: SourceCode, monospace, sans-serif }
/* base --------------*/

/* Eigenschaften von Small nach Large vererben */
body { background: maroon }
.wrap { margin: 1em }

@media only screen and (max-width:19.99em) {
    body { font-size: .9em }
}
@media only screen and (min-width:20em) {
    body { background: brown }
}
@media only screen and (min-width:30em) {
    body { background: red }
    .wrap { background: silver; padding: 1em }
}
@media only screen and (min-width:40em) {
    body { background: orange }
}
@media only screen and (min-width:48em) {
    body { background: yellow }
    .col1 { color: green }
}
@media only screen and (min-width:56em) {
    body { background: lime }
}
@media only screen and (min-width:75em) {
    body { background: white }
}
    </style>
</head>
<body>
	<div class="wrap">
        <h1>Ein bunter Strauß</h1>
        <h2>Drücken Sie <kbd>Ctrl + Shift + M</kbd> und ziehen sie dieses Dokument wie Kaugumnmi!</h2>
        <div class="col1">
            <p>Hamburger shank pork kielbasa bresaola venison, turkey ham.  Chicken rump short ribs swine, frankfurter sausage tenderloin pastrami.  Shankle meatloaf pastrami, cow ribeye rump tail.  Tail chicken tri-tip, pork chop short ribs salami ball tip ham pork belly.  Strip steak prosciutto brisket, cow capicola kielbasa shoulder beef boudin leberkäse drumstick ribeye short ribs meatball.  Bacon short ribs ham, tri-tip beef cow turkey drumstick t-bone pork tenderloin.  Pork belly rump pork loin venison leberkäse, pancetta kielbasa ham filet mignon ribeye.</p>
        </div>
        <div class="col2">
            <p>Venison tongue jerky flank.  Cow t-bone tri-tip, biltong kielbasa rump beef chicken pork ham hock.  Bresaola pork loin rump, tail cow ground round pork chop corned beef pastrami.  Shank shankle chicken, flank sirloin pork belly bacon swine pancetta shoulder cow ham.  Tri-tip sirloin leberkäse filet mignon ham pork belly bacon hamburger shankle.  Venison brisket swine leberkäse.  Sausage capicola corned beef tri-tip salami.</p>
        </div>
    </div>
</body>
</html>
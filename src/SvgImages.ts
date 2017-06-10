
module Images {
      let serialNumber: number = 0;
      export function GetTrebleClef(id?: string): { svg: string, svgId: string } {
            if (id == null || id == undefined) {
                  id = `trebleClef${serialNumber++}`;
            }
            return {
                  svg: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="283.70078"
   height="845.51971"
   viewBox="0 0 75.062965 223.71135"
   version="1.1"
   id="${id}"
   inkscape:version="0.92.0 r15299"
   sodipodi:docname="trebleClef.svg">
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-73.293029)">
    <path
       sodipodi:nodetypes="sssszssscssszsssscs"
       inkscape:connector-curvature="0"
       id="path4491"
       d="m 32.645411,293.99666 c 7.02948,1.66517 15.08816,0.52485 16.64742,-6.6437 8.41077,-38.66786 -18.34252,-167.96727 -12.6327,-183.14853 6.61333,-17.583522 8.37299,-32.695546 15.44479,-13.105492 8.5602,23.713082 -0.37597,44.382382 -15.89799,61.075672 -15.522016,16.69329 -54.874496,65.96011 -15.960546,97.0474 13.800196,11.02456 37.475166,7.91619 47.235406,-8.60935 10.22893,-17.3191 -1.36802,-50.12548 -29.09581,-47.65888 -23.214703,2.06513 -25.837187,37.0437 1.55645,46.38241 -26.953404,-15.06172 -15.6542,-40.34877 1.93001,-39.81431 16.70086,0.50762 27.27732,20.49787 23.37286,33.57142 -5.35698,17.93708 -26.94722,25.41121 -41.07222,15.21286 -39.658751,-28.63392 1.319,-68.90805 19.04218,-90.88413 17.72318,-21.97612 17.42416,-44.85372 10.17497,-68.999872 -8.3925,-27.95447 -15.53719,-2.64156 -20.28736,17.067602 -3.8003,15.76801 20.67923,140.91892 13.5682,179.84676 -1.22908,6.72834 -8.57239,8.25389 -12.57527,7.02894 -5.20258,-1.59207 -11.26881,-5.97078 -13.673643,-14.02362 -0.916539,5.44685 4.449713,13.81341 12.223253,15.65482 z"
       style="fill:#000000;stroke:#000000;stroke-width:0.87161583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <circle
       r="9.024766"
       cy="278.87866"
       cx="28.827446"
       id="circle4493"
       style="stroke-width:19.09013176;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none" />
  </g>
</svg>`, svgId: id
            };

      }

      export function GetSharpe(id?: string): { svg: string, svgId: string } {
            if (id == null || id == undefined) {
                  id = `sharpe${serialNumber++}`;
            }
            return {
                  svg: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="23mm"
   height="62mm"
   viewBox="0 0 23 62"
   version="1.1"
   id="${id}"
   inkscape:version="0.92.1 r15371"
   sodipodi:docname="sharpe.svg">
  <g
     inkscape:label="レイヤー 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-235)">
    <rect
       id="rect18"
       width="1.5"
       height="58"
       x="3.5875008"
       y="237.94168"
       style="stroke-width:0.28495616" />
    <rect
       style="stroke-width:0.28495616"
       y="235.94168"
       x="18.087502"
       height="58"
       width="1.5"
       id="rect24" />
    <path
       style="stroke-width:0.22468621"
       d="m 1.5875,274.94168 20.000001,-7 v 8 l -20.000001,7 z"
       id="rect26"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccc" />
    <path
       sodipodi:nodetypes="ccccc"
       inkscape:connector-curvature="0"
       id="path29"
       d="m 1.5875,254.94168 20.000001,-7 v 8 l -20.000001,7 z"
       style="stroke-width:0.22468621" />
  </g>
</svg>`, svgId: id
            };

      }

      export function GetFlat(id?: string): { svg: string, svgId: string } {
            if (id == null || id == undefined) {
                  id = `flat${serialNumber++}`;
            }
            return {
                  svg: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="57.70079"
   height="197.51968"
   viewBox="0 0 15.266759 52.260745"
   version="1.1"
   id="${id}"
   inkscape:version="0.92.1 r15371"
   sodipodi:docname="flat.svg">
  <g
     inkscape:label="レイヤー 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-244.73525)">
    <path
       style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 9.6922291,287.53548 c 2.0798099,-2.96977 2.4176199,-8.59888 0.6594799,-10.23549 -1.7581335,-1.63661 -4.4800465,-1.51741 -5.6476875,-1.29229 -1.16764,0.22513 -3.35118,1.02748 -3.35118,1.02748 l 0.02194,-0.69963 c 0,0 2.286764,-1.20248 3.563588,-1.37875 1.276824,-0.17628 5.2343695,-0.38356 7.2154495,1.15063 1.98109,1.53418 3.49628,5.38616 1.03944,9.5439 -2.01272,3.40613 -12.32142952,10.43099 -12.32142952,10.43099 v -50.3084 H 1.5700205 v 49.74838 c 0,0 6.042388,-5.01705 8.1222086,-7.98682 z"
       id="path57"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="zzzcczzsccccz" />
  </g>
</svg>`, svgId: id
            };

      }
}
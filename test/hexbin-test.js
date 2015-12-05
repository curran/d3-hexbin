var tape = require("tape"),
  hexbin = require("../");

var margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var points = [
  [498.0236032086178, 448.3939710547494],
  [411.15929144692234, 257.72734324784267],
  [531.3406862180277, 110.20146263044907],
  [375.5588754964012, 342.6464160109095],
  [555.6775950244747, 404.14379818197216],
  [456.349365289457, 353.10889836379005],
  [470.35426391325745, 206.37444342774558],
  [600.0715804726193, 194.07070058444265],
  [522.0940630404064, 311.24729643917146],
  [565.4494607819688, 247.18878419780933],
  [507.58357945964946, 214.53608668804407],
  [370.98177733657326, 308.4583115753253],
  [486.45163686373337, 290.56212935005817],
  [407.2235402282899, 106.45910944308773],
  [458.00918878641744, 215.42239970232868],
  [510.64767730936506, 199.5534332582755],
  [523.5134073127053, 227.63610368805223],
  [512.5427606298053, 345.5028278449192],
  [405.7322002297718, 191.67326750063924],
  [446.1823526376606, 151.8782941642097],
  [432.7586221200637, 330.944843923057],
  [554.6224774003177, 196.61598872042615],
  [305.41230341847853, 165.8052259943151],
  [463.18763560447286, 312.25341762601374],
  [268.995008327244, 245.08601128298412],
  [474.16849979507504, 274.44777119009905],
  [487.8133564091562, 174.7076394416325],
  [427.999910612349, 350.33367480974755],
  [577.9690980582061, 142.89529028118358],
  [540.76036359128, 187.86458670092875],
  [593.1883996192527, 284.5381639446101],
  [601.7089976173644, 262.2081174481684],
  [571.3858788985142, 213.8838202812545],
  [258.8192001567843, 256.1213612758908],
  [489.07599062491, 305.93777822110184],
  [541.7812549168789, 304.1619845222185],
  [506.2838300829372, 256.3328151648108],
  [390.99489280611874, 359.2891767914351],
  [505.2905999840437, 341.76324898224726],
  [605.819615076051, 375.55156712217746],
  [479.4283458653067, 233.33460503964275],
  [482.4552793916626, 273.70151731164566],
  [476.882799748711, 103.61057097304612],
  [420.1742543780101, 283.61287834587466],
  [412.22563670635566, 261.05589257932434],
  [495.4994356969169, 281.3213694171301],
  [461.5088131719774, 207.90182338239407],
  [480.444142375241, 340.36629741546994],
  [390.9098295725065, 251.04710108143013],
  [341.76902250216403, 247.85866687165785],
  [315.0897739022197, 406.26143208308775],
  [487.3643503956319, 220.3018464428725],
  [504.6931686967382, 391.8304276181872],
  [535.2310139879096, 277.3908450392523],
  [384.2301280669019, 224.78727876367276],
  [430.3039260290082, 206.00982445450896],
  [318.38509225190734, 260.18928690339476],
  [573.401333284756, 269.44325445215117],
  [557.3170134170194, 351.38078963808675],
  [542.1056436853178, 139.27311671474072],
  [430.836490748576, 301.2934170771812],
  [586.5116576830384, 135.0977719589547],
  [467.74968184564864, 310.4620707601341],
  [517.3578253913574, 348.8032306834947],
  [435.7935957490704, 248.54318341283104],
  [566.3924685471691, 127.96604403933706],
  [512.9962273946343, 272.7229116980396],
  [466.57703400779957, 157.20860794996662],
  [562.4008313877524, 393.98096658667754],
  [392.3455170856095, 152.45102959279615],
  [480.946752042646, 219.63443511014287],
  [496.68262773426653, 199.04636521840453],
  [453.0721657315775, 253.6434103429028],
  [306.46152688352583, 225.30323191054487],
  [359.43401531128427, 306.7964393962847],
  [330.60133737886235, 169.62386257565254],
  [499.0981355668898, 272.5128156193121],
  [465.12645971213567, 348.50333783985576],
  [413.1596888236102, 179.92556741951543],
  [485.31660105605295, 334.00232856014037],
  [393.46067732617973, 167.66030554965502],
  [450.0721942807145, 121.74849660179552],
  [499.20592687056666, 225.34579818358665],
  [551.3227586246057, 150.75910242614253],
  [476.1608841559673, 64.42022683508651],
  [484.54050256336745, 298.9634823634707],
  [456.99245007975077, 302.8761537982154],
  [391.0979098470444, 349.14761166386484],
  [396.05747917364744, 216.30437520727648],
  [468.6660384818431, 365.056936478263],
  [561.4564328495835, 198.9561323095617],
  [472.0208914104879, 174.25449615669464],
  [406.2950358568339, 233.71583223911088],
  [429.0810618116383, 205.5356007769186],
  [596.1711015462756, 318.30370196148704],
  [383.45082956380793, 248.83509089115387],
  [575.4455192266253, 357.62295839291687],
  [610.1397116445846, 138.94026350924528],
  [500.3909285449647, 182.5599252933647],
  [485.80125402997066, 131.0581271256479],
  [367.31690911885676, 154.14373441038393],
  [558.6683460777703, 324.5632756609933],
  [436.68948011685376, 200.23564701441887],
  [323.90614213054545, 289.7616684488725],
  [525.398307158243, 96.59973125626587],
  [456.6878557242551, 249.56027589396277],
  [475.92183747936946, 331.4886090992913],
  [565.5385828438551, 153.74340107708093],
  [713.0254842943277, 209.51199721269842],
  [412.41417775516595, 232.2865693393653],
  [550.7271909074148, 208.41273920130146],
  [521.3095431261854, 277.8847341777931],
  [430.4832486643313, 135.18076867121277],
  [442.5046150022368, 227.6609746062278],
  [395.2194383397596, 256.2098806733627],
  [588.6091703919174, 235.74604365658442],
  [418.16583897525305, 216.4505182262523],
  [326.317404591239, 359.94144001964384],
  [393.87331647150415, 266.8268327304161],
  [448.30293276936965, 279.3926520069052],
  [458.12290636160526, 260.81876026253127],
  [502.912396807404, 74.97198449502613],
  [544.6061433980828, 118.18250736997015],
  [600.221465866784, 248.65835643211577],
  [444.41645208251515, 173.311171432723],
  [617.5577949020965, 338.45577264034364],
  [451.272841956958, 260.0263969231967],
  [347.6548920098753, 227.08504454490685],
  [501.65781427570363, 284.9740542283004],
  [623.9510857144858, 268.15579474067897],
  [477.2195918878072, 229.61038406283225],
  [447.2778362372057, 250.60503160209169],
  [593.2885111267568, 135.86948519711063],
  [503.5994999723891, 177.69854005477129],
  [376.248736640456, 378.27548578334586],
  [520.3686742564146, 97.71027570094245],
  [534.3932996258145, 210.9335334088192],
  [607.2628883677187, 111.02176382150316],
  [545.81799784639, 269.4150361343103],
  [606.079764046617, 375.8552406374864],
  [432.30558506416173, 319.0311550396887],
  [377.47576658312744, 75.8544056176377],
  [372.0205838332778, 285.57150441257477],
  [509.94573315826676, 159.34915724303414],
  [534.8392384019863, 218.93346898872034],
  [519.2431663275295, 287.85545225224314],
  [463.51198635970786, 319.9151658321148],
  [476.86605852513424, 82.24017549000953],
  [494.62356493767527, 202.85798514206536],
  [568.2217543394343, 178.90419402062759],
  [545.525553787126, 316.56703472420054],
  [511.71161504018426, 355.48055717967094],
  [603.6247344430242, 140.7028033189234],
  [550.8038066054063, 150.90445695402735],
  [479.0820850236715, 237.07999487647191],
  [386.23948441036833, 197.83824528264392],
  [572.6052992476556, 279.7625249691616],
  [458.4350806728708, 96.40180317054234],
  [575.7539071155949, 204.43335176086495],
  [413.9710131210953, 365.3864359881612],
  [501.23698085043867, 286.8537398789842],
  [484.41142529561114, 251.70555615884066],
  [567.6668808897921, 91.80883841474662],
  [444.73786448589397, 197.4068158832244],
  [651.3380617190695, 167.0541114874227],
  [572.1623613494277, 191.5166145728919],
  [504.90913100336473, 169.34917769892965],
  [513.6111985844831, 251.6448937353187],
  [434.77965674504355, 54.60355386522167],
  [464.22116847724527, 178.70422118818072],
  [536.8346218816117, 315.89994335852106],
  [605.6601393075214, 288.48771423072833],
  [520.4117702913816, 127.79812751843235],
  [599.0936252201307, 203.60458577917043],
  [467.0541482025053, 202.62342405772557],
  [657.1740609465857, 292.50187077762945],
  [333.1941347747239, 301.8350619991871],
  [466.40454305365364, 174.11213791181183],
  [423.1644092161813, 205.9624378130091],
  [458.8219389641334, 287.0052855315352],
  [471.075689094852, 272.4419715722491],
  [409.97291254082467, 248.55935601958043],
  [550.0027612995143, 287.7941947856687],
  [514.6062477605232, 233.97078317541303],
  [414.644344617836, 334.87243759167666],
  [528.3868726381775, 321.837506274675],
  [347.4683508384371, 286.8672825554339],
  [491.331778176229, 206.11355117158456],
  [683.9543252939613, 275.4800443546032],
  [552.5662627536044, 190.9092605295451],
  [526.6589188682391, 377.8778312876753],
  [541.1893353613996, 248.31694076794952],
  [445.0853964754434, 260.30617558822456],
  [444.12879746497794, 428.92206852659416],
  [537.9660316295773, 213.16713800438004],
  [419.3586387744098, 270.4318211994243],
  [329.2309523565456, 381.19537715392386],
  [576.9719017179375, 195.82239012826932],
  [515.9288404251332, 326.2093467804548],
  [422.74007080880284, 455.1881434799735]
];

var hexbin = hexbin.hexbin(points)
  .size([width, height])
  .radius(20);

tape("Testing size", function(test) {
  test.plan(1);
  test.deepEqual(hexbin.size(), [960, 500]);
  test.end();
});

tape("Testing radius", function(test) {
  test.plan(1);
  test.equal(hexbin.radius(), 20);
  test.end();
});

tape("Testing centers", function(test) {
  test.plan(1);
  test.equal(hexbin.centers().length, 513);
  test.end();
});

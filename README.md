# immovable-DJANGO-web-site design in progress

![immo](https://user-images.githubusercontent.com/54853371/64719972-ab5ca000-d4c9-11e9-85ae-76a6d6fa757d.png)



# WHAT IS IT ?

by the data give by the governement <a href=https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/> <em>here</em></a> on the price of properties we have made a page that gives the average price of houses by their room as well as their square meter and apartments on a department! We also display a google map to located the user.

We trying to inform with small summary the main concepts of real estate



# Our data:

This is French data. Our data is limited because it's a personal project with a restricted database (10 000 rows)

We can (maybe) found a departement for this postal code:

<details>

['03000', '13200', '08220', '07200', '14520', '05470', '13080', '01220', '11310', '16170', '11260', '14460', '11370', '07140', '02270', '13480', '11130', '06330', '02470', '06390', '05320', '04320', '04340', '02120', '15210', '13004', '13590', '06230', '15590', '07530', '13015', '14510', '04420', '02810', '02220', '07150', '11580', '14114', '11270', '10310', '02300', '06140', '13310', '07370', '07500', '05500', '06300', '14840', '16470', '14270', '13580', '02840', '01630', '09270', '09290', '08380', '14850', '08270', '04400', '06360', '05150', '14770', '13560', '04860', '02320', '08130', '06380', '14880', '06550', '03360', '15240', '04330', '02650', '13820', '05250', '06810', '11440', '06850', '04100', '15200', '05310', '13160', '13960', '14750', '03110', '14540', '14670', '11560', '10380', '10260', '01110', '14990', '05260', '01340', '06620', '06610', '01330', '07580', '06460', '13520', '14780', '13008', '11340', '05220', '13290', '09400', '02590', '03260', '11250', '08320', '09190', '15160', '13109', '08230', '13014', '11290', '43450', '05140', '09800', '03190', '07320', '03500', '11120', '06530', '13650', '10180', '16320', '06400', '04250', '10160', '14100', '02310', '01130', '02880', '02850', '13950', '01400', '11150', '08190', '11800', '12640', '02360', '11600', '08700', '13450', '03120', '14210', '07310', '07600', '01800', '13360', '01350', '11210', '11390', '02870', '09240', '12130', '01500', '16600', '15310', '14390', '06690', '04240', '11410', '08120', '03450', '13003', '12520', '11620', '11360', '08350', '08400', '14690', '11500', '01230', '16430', '13110', '10800', '11380', '09340', '04290', '14590', '01410', '01470', '13100', '07790', '13910', '11110', '03210', '14830', '10320', '14480', '12510', '07400', '03410', '15380', '07520', '14140', '13180', '06700', '02570', '02820', '02330', '13240', '02260', '13370', '05170', '12360', '09310', '06150', '11100', '13780', '01160', '12240', '01480', '01960', '03170', '14950', '14290', '13127', '12150', '10280', '13630', '13470', '10120', '06410', '03400', '13440', '04500', '02420', '01290', '08330', '05800', '02210', '02700', '12300', '10270', '14960', '13680', '07000', '13980', '08440', '16730', '13121', '11430', '15140', '14730', '13112', '02480', '16410', '04120', '14790', '01170', '12230', '12350', '06450', '07450', '08210', '06570', '06710', '14800', '14810', '11610', '08090', '13500', '13170', '06790', '06340', '09330', '11300', '04410', '13930', '03330', '14121', '15500', '14111', '13490', '10190', '10410', '10390', '10340', '05190', '04000', '02500', '06480', '08500', '16360', '12620', '07510', '02760', '04270', '12700', '13730', '02610', '05230', '01450', '07610', '01851', '03230', '09200', '10200', '03340', '02830', '01200', '06470', '02340', '04600', '05460', '14160', '08370', '16440', '04130', '03290', '13123', '07230', '01000', '13116', '11140', '16390', '14370', '13124', '10240', '14113', '02190', '14230', '14930', '13115', '04150', '06510', '02100', '03600', '10420', '15000', '13210', '10510', '10430', '05480', '12720', '13430', '13118', '11220', '08600', '15260', '05240', '03390', '10000', '13002', '09390', '06500', '05700', '02690', '14120', '04350', '02230', '01540', '13105', '11400', '03140', '15700', '05600', '14940', '01460', '14330', '05330', '14920', '07380', '02550', '14110', '15400', '12540', '08160', '13011', '05380', '13120', '07440', '02440', '02350', '13530', '07210', '05110', '13850', '13010', '15110', '12490', '11540', '14860', '09700', '13720', '13104', '13006', '05160', '01990', '06830', '07190', '06240', '04530', '02160', '14400', '06800', '14980', '07410', '03150', '08150', '03320', '13350', '10110', '15130', '14680', '04700', '14440', '15190', '05350', '10300', '06950', '10140', '04140', '01710', '08170', '05100', '09600', '02630', '10230', '05560', '14150', '14610', '14700', '02620', '13510', '12270', '12410', '06580', '16480', '13330', '01550', '01750', '06730', '01250', '07170', '06200', '02580', '01430', '01300', '14630', '02680', '12160', '09110', '06600', '08140', '06540', '13570', '10130', '14170', '14470', '13860', '07700', '02170', '16400', '13250', '02390', '12100', '12560', '01590', '14450', '13640', '07430', '03350', '06100', '09460', '08110', '01150', '02110', '02800', '03630', '13280', '07570', '16210', '04220', '01140', '07590', '06910', '05130', '13410', '07160', '16000', '11490', '07660', '07690', '02720', '13420', '14200', '06440', '06260', '04160', '11330', '16710', '03700', '14550', '12370', '09160', '16250', '13126', '10150', '12380', '07100', '13390', '07800', '11230', '13870', '07630', '13770', '13690', '07270', '13119', '07350', '11160', '12000', '16120', '01570', '04210', '04870', '13320', '08200', '11320', '11170', '06250', '10170', '05200', '05290', '03440', '14360', '01270', '02410', '03240', '14710', '14112', '11190', '09500', '11700', '13122', '02400', '02790', '13821', '11590', '03100', '01280', '05340', '02600', '11420', '14600', '01660', '06670', '02150', '14410', '13007', '02450', '05120', '15320', '13090', '06740', '13840', '07340', '15120', '14320', '14340', '14280', '13130', '13700', '13005', '04510', '01440', '13380', '10350', '01240', '13920', '04180', '13009', '09220', '07300', '04380', '15250', '14250', '07260', '12290', '13670', '13340', '15270', '01390', '02490', '06560', '02430', '01320', '13001', '02860', '15350', '13260', '07560', '14740', '16340', '06190', '09250', '09210', '07460', '06270', '13103', '14350', '01090', '11510', '01310', '06310', '14500', '16160', '11240', '14260', '04280', '14570', '01680', '07120', '01120', '01510', '14490', '08300', '02140', '14620', '14380', '09140', '04370', '02290', '09230', '06110', '04170', '13150', '13830', '12400', '04230', '10290', '07250', '06590', '03130', '14970', '05400', '15100', '16190', '15600', '16290', '13740', '13012', '14430', '13220', '02370', '06370', '03380', '15290', '13230', '06640', '15150', '13190', '13890', '07110', '08360', '06320', '12250', '05300', '02540', '13810', '02670', '12480', '02250', '14123', '13111', '06650', '09130', '16300', '13114', '04300', '11480', '10360', '13660', '13610', '06660', '10700', '03470', '09300', '03310', '13620', '10600', '03270', '04800', '12200', '15430', '01210', '15800', '07240', '13460', '09120', '04190', '13760', '09000', '13790', '02520', '11570', '03430', '02380', '06420', '04260', '13129', '13600', '01700', '11350', '08310', '06750', '02240', '06160', '15300', '10500', '01380', '16570', '13113', '01370', '03220', '01640', '13140', '10330', '05000', '07290', '13800', '09350', '06130', '13117', '08430', '01580', '12110', '', '04850', '13270', '07470', '13013', '11000', '14910', '14000', '08800', '07130', '06210', '07330', '14240', '12780', '15170', '13940', '06520', '03300', '16200', '16620', '06000', '11200', '09420', '10100', '16140', '13750', '13880', '13990', '15340', '14530', '14190', '14640', '14130', '14310', '09320', '04660', '13016', '03420', '13550', '04200', '14420', '10210', '08000', '12550', '15220', '14650', '03460', '02130', '07220', '01100', '14220', '03200', '07360', '04110', '16800', '01260', '10450', '14760', '12430', '03800', '01360', '03160', '03510', '13400', '03250', '02510', '10250', '15230', '13540', '10440', '06430', '02200', '10220', '02000', '09100', '03370', '13300', '04310', '01560', '04360', '10400', '02460', '01420', '02640', '01190', '13710', '01600', '06220']


</details>

# Architecture

class diagramm in cours

sql class in cours

# UML

actor, functionality in cours




const CITIES = [
	{
		id: 2394,
		coordinate: { lat: 12.2427563, lng: 102.5174734 },
		name: 'ตราด',
	},
	{
		id: 2671,
		coordinate: { lat: 14.9798997, lng: 102.0977693 },
		name: 'นครราชสีมา',
	},
	{
		id: 8828,
		coordinate: { lat: 1.3553794, lng: 103.8677444 },
		name: 'สิงคโปร์',
	},
	{
		id: 1,
		coordinate: { lat: 13.7563309, lng: 100.5017651 },
		name: 'กรุงเทพมหานคร',
	},
	{
		id: 373,
		coordinate: { lat: 18.787747, lng: 98.99312839999999 },
		name: 'เชียงใหม่',
	},
	{
		id: 269,
		coordinate: { lat: 13.3611431, lng: 100.9846717 },
		name: 'ชลบุรี',
	},
	{
		id: 716,
		coordinate: { lat: 13.8621125, lng: 100.5143528 },
		name: 'นนทบุรี',
	},
	{
		id: 931,
		coordinate: { lat: 13.5990961, lng: 100.5998319 },
		name: 'สมุทรปราการ',
	},
	{
		id: 775,
		coordinate: { lat: 14.0208391, lng: 100.5250276 },
		name: 'ปทุมธานี',
	},
	{
		id: 6542,
		coordinate: { lat: 7.137447813050977, lng: 100.60336067187495 },
		name: 'สงขลา',
	},
	{
		id: 843,
		coordinate: { lat: 7.9519331, lng: 98.33808839999999 },
		name: 'ภูเก็ต',
	},
	{
		id: 7275,
		coordinate: { lat: 9.1382389, lng: 99.3217483 },
		name: 'สุราษฎร์ธานี',
	},
	{
		id: 602,
		coordinate: { lat: 13.8199206, lng: 100.0621676 },
		name: 'นครปฐม',
	},
	{
		id: 142,
		coordinate: { lat: 13.8361545, lng: 100.5633676 },
		name: 'จตุจักร',
	},
	{
		id: 1454,
		coordinate: { lat: 16.4419355, lng: 102.8359921 },
		name: 'ขอนแก่น',
	},
	{
		id: 864,
		coordinate: { lat: 12.707434, lng: 101.1473517 },
		name: 'ระยอง',
	},
	{
		id: 2153,
		coordinate: { lat: 19.9071656, lng: 99.830955 },
		name: 'เชียงราย',
	},
	{
		id: 3749,
		coordinate: { lat: 11.812367, lng: 99.79732709999999 },
		name: 'ประจวบคีรีขันธ์',
	},
	{
		id: 4547,
		coordinate: { lat: 16.8298048, lng: 100.2614915 },
		name: 'พิษณุโลก',
	},
	{
		id: 4007,
		coordinate: { lat: 14.3532128, lng: 100.5689599 },
		name: 'อยุธยา',
	},
	{
		id: 2993,
		coordinate: { lat: 8.4303975, lng: 99.96312189999999 },
		name: 'นครศรีธรรมราช',
	},
	{
		id: 8280,
		coordinate: { lat: 15.2286861, lng: 104.8564217 },
		name: 'อุบลราชธานี',
	},
	{
		id: 1766,
		coordinate: { lat: 13.6904194, lng: 101.0779596 },
		name: 'ฉะเชิงเทรา',
	},
	{
		id: 1098,
		coordinate: { lat: 14.0227797, lng: 99.5328115 },
		name: 'กาญจนบุรี',
	},
	{
		id: 6770,
		coordinate: { lat: 13.5475216, lng: 100.2743956 },
		name: 'สมุทรสาคร',
	},
	{
		id: 5639,
		coordinate: { lat: 13.5282893, lng: 99.8134211 },
		name: 'ราชบุรี',
	},
	{
		id: 4650,
		coordinate: { lat: 12.9649215, lng: 99.6425883 },
		name: 'เพชรบุรี',
	},
	{
		id: 2,
		coordinate: { lat: 13.7560243, lng: 100.4986793 },
		name: 'พระนคร',
	},
	{
		id: 170,
		coordinate: { lat: 13.758889, lng: 100.534444 },
		name: 'ราชเทวี',
	},
	{
		id: 993,
		coordinate: { lat: 12.568452, lng: 99.9577223 },
		name: 'หัวหิน',
	},
	{
		id: 5890,
		coordinate: { lat: 18.2888404, lng: 99.49087399999999 },
		name: 'ลำปาง',
	},
	{
		id: 6883,
		coordinate: { lat: 14.5289154, lng: 100.9101421 },
		name: 'สระบุรี',
	},
	{
		id: 7947,
		coordinate: { lat: 17.4138413, lng: 102.7872325 },
		name: 'อุดรธานี',
	},
	{
		id: 1036,
		coordinate: { lat: 8.0862997, lng: 98.9062835 },
		name: 'กระบี่',
	},
	{
		id: 7154,
		coordinate: { lat: 14.4744892, lng: 100.1177128 },
		name: 'สุพรรณบุรี',
	},
	{
		id: 4752,
		coordinate: { lat: 16.301669, lng: 101.1192804 },
		name: 'เพชรบูรณ์',
	},
	{
		id: 1679,
		coordinate: { lat: 12.61134, lng: 102.1038546 },
		name: 'จันทบุรี',
	},
	{
		id: 3186,
		coordinate: { lat: 15.6930072, lng: 100.1225595 },
		name: 'นครสวรรค์',
	},
	{
		id: 8692,
		coordinate: { lat: 35.6894875, lng: 139.6917064 },
		name: 'โตเกียว',
	},
	{
		id: 5754,
		coordinate: { lat: 14.7995081, lng: 100.6533706 },
		name: 'ลพบุรี',
	},
	{
		id: 6398,
		coordinate: { lat: 17.1545995, lng: 104.1348365 },
		name: 'สกลนคร',
	},
	{
		id: 2441,
		coordinate: { lat: 16.8839901, lng: 99.1258498 },
		name: 'ตาก',
	},
	{
		id: 4885,
		coordinate: { lat: 18.1445774, lng: 100.1402831 },
		name: 'แพร่',
	},
	{
		id: 6064,
		coordinate: { lat: 17.4860232, lng: 101.7223002 },
		name: 'เลย',
	},
	{
		id: 4311,
		coordinate: { lat: 8.4501414, lng: 98.5255317 },
		name: 'พังงา',
	},
	{
		id: 2074,
		coordinate: { lat: 10.4930496, lng: 99.18001989999999 },
		name: 'ชุมพร',
	},
	{
		id: 6004,
		coordinate: { lat: 18.5744606, lng: 99.0087221 },
		name: 'ลำพูน',
	},
	{
		id: 3536,
		coordinate: { lat: 14.9930017, lng: 103.1029191 },
		name: 'บุรีรัมย์',
	},
	{
		id: 6730,
		coordinate: { lat: 13.4098217, lng: 100.0022645 },
		name: 'สมุทรสงคราม',
	},
	{
		id: 3806,
		coordinate: { lat: 14.0420699, lng: 101.6600874 },
		name: 'ปราจีนบุรี',
	},
	{
		id: 7058,
		coordinate: { lat: 17.0055573, lng: 99.8263712 },
		name: 'สุโขทัย',
	},
	{
		id: 7426,
		coordinate: { lat: 14.882905, lng: 103.4937107 },
		name: 'สุรินทร์',
	},
	{
		id: 3422,
		coordinate: { lat: 18.7756318, lng: 100.7730417 },
		name: 'น่าน',
	},
	{
		id: 1364,
		coordinate: { lat: 16.4827798, lng: 99.5226618 },
		name: 'กำแพงเพชร',
	},
	{
		id: 1210,
		coordinate: { lat: 16.4314078, lng: 103.5058755 },
		name: 'กาฬสินธุ์',
	},
	{
		id: 2514,
		coordinate: { lat: 14.2069466, lng: 101.2130511 },
		name: 'นครนายก',
	},
	{
		id: 4233,
		coordinate: { lat: 19.2154367, lng: 100.2023692 },
		name: 'พะเยา',
	},
	{
		id: 5389,
		coordinate: { lat: 16.0538196, lng: 103.6520036 },
		name: 'ร้อยเอ็ด',
	},
	{
		id: 2560,
		coordinate: { lat: 17.392039, lng: 104.7695508 },
		name: 'นครพนม',
	},
	{
		id: 4445,
		coordinate: { lat: 16.4429516, lng: 100.3482329 },
		name: 'พิจิตร',
	},
	{
		id: 4368,
		coordinate: { lat: 7.6166823, lng: 100.0740231 },
		name: 'พัทลุง',
	},
	{
		id: 1933,
		coordinate: { lat: 15.8068173, lng: 102.0315027 },
		name: 'ชัยภูมิ',
	},
	{
		id: 8124,
		coordinate: { lat: 17.6200886, lng: 100.0992942 },
		name: 'อุตรดิตถ์',
	},
	{
		id: 4972,
		coordinate: { lat: 16.0132015, lng: 103.1615169 },
		name: 'มหาสารคาม',
	},
	{
		id: 6814,
		coordinate: { lat: 13.824038, lng: 102.0645839 },
		name: 'สระแก้ว',
	},
	{
		id: 7603,
		coordinate: { lat: 17.8782803, lng: 102.7412638 },
		name: 'หนองคาย',
	},
	{
		id: 1871,
		coordinate: { lat: 15.1851971, lng: 100.125125 },
		name: 'ชัยนาท',
	},
	{
		id: 7008,
		coordinate: { lat: 14.8936253, lng: 100.3967314 },
		name: 'สิงห์บุรี',
	},
	{
		id: 6169,
		coordinate: { lat: 15.1186009, lng: 104.3220095 },
		name: 'ศรีสะเกษ',
	},
	{
		id: 5603,
		coordinate: { lat: 9.9528702, lng: 98.60846409999999 },
		name: 'ระนอง',
	},
	{
		id: 6686,
		coordinate: { lat: 6.6238158, lng: 100.0673744 },
		name: 'สตูล',
	},
	{
		id: 5119,
		coordinate: { lat: 16.542443, lng: 104.7209151 },
		name: 'มุกดาหาร',
	},
	{
		id: 8201,
		coordinate: { lat: 15.3835001, lng: 100.0245527 },
		name: 'อุทัยธานี',
	},
	{
		id: 3331,
		coordinate: { lat: 6.4254607, lng: 101.8253143 },
		name: 'นราธิวาส',
	},
	{
		id: 9195,
		coordinate: { lat: 34.6937378, lng: 135.5021651 },
		name: 'โอซาก้า',
	},
	{
		id: 7802,
		coordinate: { lat: 14.5896054, lng: 100.455052 },
		name: 'อ่างทอง',
	},
	{
		id: 7736,
		coordinate: { lat: 17.2218247, lng: 102.4260368 },
		name: 'หนองบัวลำภู',
	},
	{
		id: 5322,
		coordinate: { lat: 6.541147, lng: 101.2803947 },
		name: 'ยะลา',
	},
	{
		id: 3879,
		coordinate: { lat: 6.761830799999999, lng: 101.3232549 },
		name: 'ปัตตานี',
	},
	{
		id: 5233,
		coordinate: { lat: 16.034321963079776, lng: 104.30321116679693 },
		name: 'ยโสธร',
	},
	{
		id: 7883,
		coordinate: { lat: 15.8656783, lng: 104.6257774 },
		name: 'อำนาจเจริญ',
	},
	{
		id: 27095,
		coordinate: { lat: 13.294957186711162, lng: 100.90624374926756 },
		name: 'บางแสน',
	},
	{
		id: 224,
		coordinate: { lat: 13.734963741873493, lng: 100.58010841796875 },
		name: 'ทองหล่อ',
	},
	{
		id: 1009,
		coordinate: { lat: 12.937361, lng: 100.884279 },
		name: 'พัทยา',
	},
	{
		id: 225,
		coordinate: { lat: 13.742428221824547, lng: 100.5531388862305 },
		name: 'อโศก',
	},
	{
		id: 220,
		coordinate: { lat: 13.745278485810786, lng: 100.53337281481936 },
		name: 'สยาม',
	},
	{
		id: 55970,
		coordinate: { lat: 13.68680363189265, lng: 100.61118927347184 },
		name: 'วัน-โอ-วัน เดอะเทิร์ดเพลส',
	},
	{
		id: 55888,
		coordinate: { lat: 19.3020296, lng: 97.96543679999999 },
		name: 'แม่ฮ่องสอน',
	},
	{
		id: 8735,
		coordinate: { lat: 18.3609104, lng: 103.6464463 },
		name: 'บึงกาฬ',
	},
	{
		id: 9681,
		coordinate: { lat: 13.7234186, lng: 100.4762319 },
		name: 'กรุงเทพและปริมณฑล',
	},
	{
		id: 55971,
		coordinate: { lat: 13.723419, lng: 100.476232 },
		name: 'Catalina Island',
	},
]

export default CITIES

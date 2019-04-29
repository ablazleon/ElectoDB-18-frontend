/*nomenclatura:
id_ley (1=d'Hondt, 2=Saint-Leguë)
id(0=Madrid, 1=Murcia, 2=Asturias)
id_ano (5=2019, 4=2016, 3=2015, 2=2011, 1=2007, 0=2003)
votos= (PP, PSOE, Ciu, Podemos, Otros)
escaños=(PP, PSOE, Ciu, Podemos, Otros)
*/
export const resultados1 =[
	[//2019
		{
		"id": "Madrid", //Madrid
		"PP":[1315847, 15],
		"PSOE":[674825, 7],
		"Podemos":[729870, 8],
		"CiU":[610391, 6],
		"color":"purple",
			"year":"2019"
		},
		{
		"id": "Murcia", //Murcia
		"PP":[332437, 5],
		"PSOE":[144322, 2],
		"Podemos":[102355, 2],
		"CiU":[111574, 1],
		"color":"blue",
			"year":"2019"
		},
		{
		"id": "Asturias", //Asturias
		"PP":[207811, 3],
		"PSOE":[346336, 2],
		"Podemos":[140058, 2],
		"CiU":[74370, 1],
		"color":"orange",
			"year":"2019"
		}
	],
	[ //2016
		{
		"id": "Madrid", //Madrid
		"PP":[1203837, 13],
		"PSOE":[843158, 6],
		"Podemos":[650477, 8],
		"CiU":[676389, 7],
		"color":"red",
			"year":"2016"
		},
		{
			"id": "Murcia", //Murcia
			"PP":[393546, 5],
			"PSOE":[147524,2],
			"Podemos":[210089, 1],
			"CiU":[528294, 2],
		"color":"orage",
			"year":"2016"
		},
		{
			"id": "Asturias", //Asturias
			"PP":[186586, 3],
			"PSOE":[144017, 2],
			"Podemos":[532007, 2],
			"CiU":[33885, 1],
		"color":"purple",
			"year":"2016"
		}
	],
	[ //2015
		{
		"id": "Madrid",
		"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"red",
			"year":"2015"
		},
		{
			"id": "Murcia",
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"orange",
			"year":"2015"
		},
		{
			"id": "Asturias",
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue",
			"year":"2015"
		}
	],
	[ // 2011
		{
		"id": "Madrid",
		"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue",
			"year":"2011"
		},
		{
			"id": "Murcia",
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"red",
			"year":"2011"
		},
		{
			"id": "Asturias",
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"purple",
			"year":"2011"
		}
	]
];
export const resultados2 =[
	[
		{
		"id": 0,
		"PP":[1300000, 15],
		"PSOE":[674000, 7],
		"Podemos":[700000, 8],
		"CiU":[600000, 6],
		"color":"blue"
		},
		{
		"id": 1,
		"PP":[300000, 4],
		"PSOE":[350000, 4],
		"Podemos":[200000, 3],
		"CiU":[130000, 1],
		"color":"red"
		},
		{
		"id": 2,
		"PP":[130000, 2],
		"PSOE":[70000, 1],
		"Podemos":[50000, 1],
		"CiU":[50000, 1],
		"color":"blue"
		}
	],
	[
		{
		"id": 0,
		"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		},
		{
			"id": 0,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"red"
		},
		{
			"id": 0,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		}
	],
	[
		{
		"id": 0,
		"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		},
		{
			"id": 0,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"red"
		},
		{
			"id": 0,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		}
	],
	[
		{
		"id": 0,
		"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		},
		{
			"id": 0,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"red"
		},
		{
			"id": 0,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		}
	]
];

/*nomenclatura:
id_ley (1=d'Hondt, 2=Saint-Leguë)
id(0=Madrid, 1=Murcia, 2=Asturias)
id_ano (5=2019, 4=2016, 3=2015, 2=2011, 1=2007, 0=2003)
votos= (PP, PSOE, Ciu, Podemos, Otros)
escaños=(PP, PSOE, Ciu, Podemos, Otros)
*/
export const resultados1 =[
	[//2016
		{
		"id": 0, //Madrid
		"PP":[1315847, 15],
		"PSOE":[674825, 7],
		"Podemos":[729870, 8],
		"CiU":[610391, 6],
		"color":"blue"
		},
		{
		"id": 1, //Murcia
		"PP":[332437, 5],
		"PSOE":[144322, 2],
		"Podemos":[102355, 2],
		"CiU":[111574, 1],
		"color":"blue"
		},
		{
		"id": 2, //Asturias
		"PP":[207811, 3],
		"PSOE":[146336, 2],
		"Podemos":[140058, 2],
		"CiU":[74370, 1],
		"color":"blue"
		}
	],
	[ //2015
		{
		"id": 0, //Madrid
		"PP":[1203837, 13],
		"PSOE":[643158, 6],
		"Podemos":[750477, 8],
		"CiU":[676389, 7],
		"color":"blue"
		},
		{
			"id": 1, //Murcia
			"PP":[293546, 5],
			"PSOE":[147524,2],
			"Podemos":[110089, 1],
			"CiU":[128294, 2],
		"color":"blue"
		},
		{
			"id": 2, //Asturias
			"PP":[186586, 3],
			"PSOE":[144017, 2],
			"Podemos":[132007, 2],
			"CiU":[83885, 1],
		"color":"blue"
		}
	],
	[ //2011
		{
		"id": 0,
		"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		},
		{
			"id": 1,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"red"
		},
		{
			"id": 2,
			"PP":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"PSOE":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"Podemos":[(Math.random()*300+1)*1000, Math.random()*10+1],
			"CiU":[(Math.random()*300+1)*1000, Math.random()*10+1],
		"color":"blue"
		}
	],
	[ // 2008
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

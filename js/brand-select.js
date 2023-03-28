function brandSelect() {
	console.log('brandSelect is called')

	var brandsList = {
		disneyPrincess: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_disneyprincess.png",
			"name" : "Disney Princess",
			"width" : 178,
			"height" : 82
		},
		frozen: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_frozen.png",
			"name" : "Frozen",
			"width" : 178,
			"height" : 64
		},
		furReal: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_furreal.png",
			"name" : "FurReal",
			"width" : 128,
			"height" : 82
		},
		jenga: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_jenga.png",
			"name" : "Jenga",
			"width" : 126,
			"height" : 82
		},
		monopoly: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_monopoly.png",
			"name" : "Monopoly",
			"width" : 199,
			"height" : 36
		},
		myLittlePony: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_mylittlepony.png",
			"name" : "My Little Pony",
			"width" : 120,
			"height" : 94
		},
		nerf: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_nerf.png",
			"name" : "Nerf",
			"width" : 197,
			"height" : 108
		},
		playDoh: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_playdoh.png",
			"name" : "Play-Doh",
			"width" : 163,
			"height" : 82
		},
		starWars: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_starwars.png",
			"name" : "Star Wars",
			"width" : 122,
			"height" : 82
		},
		transformers: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_transformers.png",
			"name" : "Transformers",
			"width" : 263,
			"height" : 40
		},
		hasbro: {
			"logo" : "https://i.alza.cz/Foto/LegendFoto/EN/Files/sablona/hasbro/img/logos/logo_hasbro.png",
			"name" : "Hasbro",
			"width" : 184,
			"height" : 101
		}
	}

	$("#celek .brand-select__box").on("click", function () {
		let vendorActive = $("#celek #brand-container").attr('data-brand')
		let vendorName = $(this).attr('data-vendor')
		let vendorLogo = $(this).find("img").attr('src')
		let vendorWidth = $(this).find("img").attr('data-width')
		let vendorHeight = $(this).find("img").attr('data-height')

		$("." + vendorActive).removeClass(vendorActive).addClass(vendorName).attr('data-brand', vendorName)

		$("#celek .pp-header .pp-header--logo img").attr({
			"src": vendorLogo,
			"width": vendorWidth,
			"height": vendorHeight
		})
	});
}

console.log('brand-select.js is running')
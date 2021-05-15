export const keys = {
	comparaisonAlcool:
		"Par rapport à la consommation d’alcool, selon vous, les risques liés à la consommation de cannabis sont équivalents, plus grave ou moins grave : ",
	comparaisonTabac:
		"Par rapport à la consommation de tabac, selon vous, les risques liés à la consommation de cannabis sont équivalents, plus grave ou moins grave : ",

	pourquoiAssouplir: [
		"Pour quelles raisons souhaitez-vous un assouplissement de la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 1]",
		"Pour quelles raisons souhaitez-vous un assouplissement de la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 2]",
		"Pour quelles raisons souhaitez-vous un assouplissement de la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 3]",
		"Pour quelles raisons souhaitez-vous un assouplissement de la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 4]",
	],
	commentVendre:
		"En cas de légalisation, comment imaginez-vous le commerce du cannabis ?  ",

	quoiPayerAvecTaxes: [
		"En cas de légalisation, quelles seraient selon vous les priorités budgétaires qui pourraient être financées par les ressources fiscales susceptibles d’être générées par la vente encadrée de cannabis ?  [Classement 1]",
		"En cas de légalisation, quelles seraient selon vous les priorités budgétaires qui pourraient être financées par les ressources fiscales susceptibles d’être générées par la vente encadrée de cannabis ?  [Classement 2]",
		"En cas de légalisation, quelles seraient selon vous les priorités budgétaires qui pourraient être financées par les ressources fiscales susceptibles d’être générées par la vente encadrée de cannabis ?  [Classement 3]",
		"En cas de légalisation, quelles seraient selon vous les priorités budgétaires qui pourraient être financées par les ressources fiscales susceptibles d’être générées par la vente encadrée de cannabis ?  [Classement 4]",
		"En cas de légalisation, quelles seraient selon vous les priorités budgétaires qui pourraient être financées par les ressources fiscales susceptibles d’être générées par la vente encadrée de cannabis ?  [Classement 5]",
	],

	pourCulturePerso:
		"En cas de légalisation ou de dépénalisation, seriez-vous favorable à la possibilité pour les particuliers de cultiver à des fins personnelles un nombre de pieds de cannabis fixé par la loi, comme c’est le cas au Canada depuis 2018 ? ",

	pourquoiDurcir: [
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 1]",
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 2]",
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 3]",
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 4]",
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 5]",
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 6]",
		"Pour quelles raisons souhaitez-vous renforcer ou maintenir la politique actuelle en matière de répression et de prévention de l’usage du cannabis ?  [Classement 7]",
	],
};

const ages = {
	"-18": "Moins de 18 ans",
	"18-29": "18 à 29 ans",
	"30-39": "30 à 39 ans",
	"40-49": "40 à 49 ans",
	"50-64": "50 à 64 ans",
	"65-74": "65 à 74 ans",
	"75+": "75 ans et plus",
};

export const criteres = {
	sexe: {
		homme: { "Vous êtes ?  ": ["Un homme"] },
		femme: { "Vous êtes ?  ": ["Une femme"] },
		nr: { "Vous êtes ?  ": ["", "Je ne souhaite pas répondre"] },
	},
	consommation: {
		oui: {
			"Vous consommez du cannabis :": [
				"Régulièrement",
				"Occasionnellement",
				"Tous les jours",
			],
		},
		non: { "Vous consommez du cannabis :": ["Jamais"] },
		nr: {
			"Vous consommez du cannabis :": [
				"",
				"Je ne souhaite pas répondre à cette question",
			],
		},
	},
	age: {
		"-18": { "Vous avez ?": [ages["-18"]] },
		"18-29": { "Vous avez ?": [ages["18-29"]] },
		"30-39": { "Vous avez ?": [ages["30-39"]] },
		"40-49": { "Vous avez ?": [ages["40-49"]] },
		"50-64": { "Vous avez ?": [ages["50-64"]] },
		"65-74": { "Vous avez ?": [ages["65-74"]] },
		"75+": { "Vous avez ?": [ages["75+"]] },
		nr: { "Vous avez ?": [""] },

		"-40": { "Vous avez ?": [ages["-18"], ages["18-29"], ages["30-39"]] },
		"40-64": { "Vous avez ?": [ages["40-49"], ages["50-64"]] },
		"65+": { "Vous avez ?": [ages["65-74"], ages["75+"]] },
		"18-64": {
			"Vous avez ?": [
				ages["-18"],
				ages["18-29"],
				ages["30-39"],
				ages["40-49"],
				ages["50-64"],
			],
		},
	},
	types: {
		organisation: {
			"Vous répondez en tant que :": ["Au nom d’une organisation"],
		},
		nr: { "Vous répondez en tant que :": [""] },
		individu: {
			"Vous répondez en tant que :": [
				"Individuellement en tant que personne physique",
			],
		},
	},
	choix: {
		légalisation: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[
					"À une autorisation de la consommation et de la production dans un cadre établi par la loi (légalisation)",
				],
		},
		dépénalisation: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[
					"À une suppression des sanctions pénales attachées à la consommation et à la possession de petites quantités de cannabis issues du marché illégal (dépénalisation)",
				],
		},
		renforcement: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[
					"À un renforcement des sanctions pour le trafic et l’usage de cannabis",
				],
		},
		maintien: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				["Au maintien de la législation en vigueur"],
		},
		nr: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[""],
		},
	},
	choixBref: {
		pour: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[
					"À une autorisation de la consommation et de la production dans un cadre établi par la loi (légalisation)",
					"À une suppression des sanctions pénales attachées à la consommation et à la possession de petites quantités de cannabis issues du marché illégal (dépénalisation)",
				],
		},
		contre: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[
					"À un renforcement des sanctions pour le trafic et l’usage de cannabis",
					"Au maintien de la législation en vigueur",
				],
		},
		nr: {
			"Parmi les propositions suivantes, à quelle évolution seriez-vous le plus favorable en matière de consommation de cannabis : ":
				[""],
		},
	},

	repressionLimiteAmpleur: {
		oui: {
			"Pensez-vous que le dispositif actuel de répression de la consommation de cannabis permet d’en limiter l’ampleur ?":
				["Oui"],
		},
		non: {
			"Pensez-vous que le dispositif actuel de répression de la consommation de cannabis permet d’en limiter l’ampleur ?":
				["Non"],
		},
		nr: {
			"Pensez-vous que le dispositif actuel de répression de la consommation de cannabis permet d’en limiter l’ampleur ?":
				["Je ne me prononce pas", ""],
		},
	},

	dispositifLutteContreTrafics: {
		oui: {
			"Pensez-vous que le dispositif actuel permet de lutter efficacement contre les trafics ?":
				["Oui"],
		},
		non: {
			"Pensez-vous que le dispositif actuel permet de lutter efficacement contre les trafics ?":
				["Non"],
		},
		nr: {
			"Pensez-vous que le dispositif actuel permet de lutter efficacement contre les trafics ?":
				["Je ne me prononce pas", ""],
		},
	},

	pourCulturePerso: {
		oui: { [keys.pourCulturePerso]: ["Oui"] },
		non: { [keys.pourCulturePerso]: ["Non"] },
		nr: { [keys.pourCulturePerso]: ["", "Je ne me prononce pas"] },
	},
};

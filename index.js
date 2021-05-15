import csv from "csv-parser";
import fs from "fs";
import { criteres, keys } from "./criteres.js";

const results = [];

fs.createReadStream("résultats.csv")
	.pipe(csv({ separator: ";" }))
	.on("data", (data) => {
		if (
			// on ne garde que ceux qui sont allés jusqu'au bout
			data["Dernière page"] === "8" &&
			// et qui ont renseigné leur sexe
			["Un homme", "Une femme"].includes(data["Vous êtes ?  "])
		)
			results.push(data);
	})
	.on("end", () => {
		const regions = getCountTotalPerValue("Où résidez-vous ?");

		const fini = {
			"pas fini": countTotal({
				"Dernière page": ["", "-1", "1", "2", "3", "4", "5", "6", "7"],
			}),
			fini: countTotal({ "Dernière page": ["8"] }),
		};

		const sexes = {
			hommes: countTotal(criteres.sexe.homme),
			femmes: countTotal(criteres.sexe.femme),
			nr: countTotal(criteres.sexe.nr),
		};

		const nbrConsommation = {
			oui: count(criteres.consommation.oui),
			non: count(criteres.consommation.non),
			nr: count(criteres.consommation.nr),
		};

		const consommateurs = {
			oui: percent(nbrConsommation.oui),
			non: percent(nbrConsommation.non),
			nr: percent(nbrConsommation.nr),
		};

		const ages = {
			"-18": countTotal(criteres.age["-18"]),
			"18-29": countTotal(criteres.age["18-29"]),
			"30-39": countTotal(criteres.age["30-39"]),
			"40-49": countTotal(criteres.age["40-49"]),
			"50-64": countTotal(criteres.age["50-64"]),
			"65-74": countTotal(criteres.age["65-74"]),
			"75+": countTotal(criteres.age["75+"]),
			nr: countTotal(criteres.age.nr),
		};

		const types = {
			organisation: countTotal(criteres.types.organisation),
			individu: countTotal(criteres.types.individu),
			nr: countTotal(criteres.types.nr),
		};

		const choix = {
			légalisation: countTotal(criteres.choix.légalisation),
			dépénalisation: countTotal(criteres.choix.dépénalisation),
			renforcement: countTotal(criteres.choix.renforcement),
			maintien: countTotal(criteres.choix.maintien),
			nr: countTotal(criteres.choix.nr),
		};

		const choixBref = {
			pour: countTotal(criteres.choixBref.pour),
			contre: countTotal(criteres.choixBref.contre),
			nr: countTotal(criteres.choixBref.nr),
		};

		const pour = count(criteres.choixBref.pour);
		const contre = count(criteres.choixBref.contre);

		const choixParSexe = {
			hommes: {
				pour: percent(
					count({ ...criteres.sexe.homme, ...criteres.choixBref.pour }),
					pour
				),
				contre: percent(
					count({ ...criteres.sexe.homme, ...criteres.choixBref.contre }),
					contre
				),
			},
			femmes: {
				pour: percent(
					count({ ...criteres.sexe.femme, ...criteres.choixBref.pour }),
					pour
				),
				contre: percent(
					count({ ...criteres.sexe.femme, ...criteres.choixBref.contre }),
					contre
				),
			},
		};

		const choixParTrancheAge = {
			pour: {
				"-40": countTotal({
					...criteres.age["-40"],
					...criteres.choixBref.pour,
				}),
				"40-64": countTotal({
					...criteres.age["40-64"],
					...criteres.choixBref.pour,
				}),
				"65+": countTotal({
					...criteres.age["65+"],
					...criteres.choixBref.pour,
				}),
			},
			contre: {
				"-40": countTotal({
					...criteres.age["-40"],
					...criteres.choixBref.contre,
				}),
				"40-64": countTotal({
					...criteres.age["40-64"],
					...criteres.choixBref.contre,
				}),
				"65+": countTotal({
					...criteres.age["65+"],
					...criteres.choixBref.contre,
				}),
			},
		};

		const _18_64 = {
			total: count(criteres.age["18-64"]),
			hommes: count({ ...criteres.sexe.homme, ...criteres.age["18-64"] }),
			femmes: count({ ...criteres.sexe.femme, ...criteres.age["18-64"] }),
		};

		const consommateurs18_64 = {
			total: percent(
				count({ ...criteres.age["18-64"], ...criteres.consommation.oui }),
				_18_64.total
			),
			hommes: percent(
				count({
					...criteres.sexe.homme,
					...criteres.age["18-64"],
					...criteres.consommation.oui,
				}),
				_18_64.hommes
			),
			femmes: percent(
				count({
					...criteres.sexe.femme,
					...criteres.age["18-64"],
					...criteres.consommation.oui,
				}),
				_18_64.femmes
			),
		};

		const _18_29 = {
			total: count(criteres.age["18-29"]),
			hommes: count({ ...criteres.sexe.homme, ...criteres.age["18-29"] }),
			femmes: count({ ...criteres.sexe.femme, ...criteres.age["18-29"] }),
		};

		const consommateurs18_29 = {
			total: percent(
				count({ ...criteres.age["18-29"], ...criteres.consommation.oui }),
				_18_29.total
			),
			hommes: percent(
				count({
					...criteres.sexe.homme,
					...criteres.age["18-29"],
					...criteres.consommation.oui,
				}),
				_18_29.hommes
			),
			femmes: percent(
				count({
					...criteres.sexe.femme,
					...criteres.age["18-29"],
					...criteres.consommation.oui,
				}),
				_18_29.femmes
			),
		};

		const avisSelonConsommation = {
			consommateurs: {
				pour: percent(
					count({ ...criteres.consommation.oui, ...criteres.choixBref.pour }),
					nbrConsommation.oui
				),
				contre: percent(
					count({ ...criteres.consommation.oui, ...criteres.choixBref.contre }),
					nbrConsommation.oui
				),
			},
			nonConsommateurs: {
				pour: percent(
					count({ ...criteres.consommation.non, ...criteres.choixBref.pour }),
					nbrConsommation.non
				),
				contre: percent(
					count({ ...criteres.consommation.non, ...criteres.choixBref.contre }),
					nbrConsommation.non
				),
			},
			nrConsommateurs: {
				pour: percent(
					count({ ...criteres.consommation.nr, ...criteres.choixBref.pour }),
					nbrConsommation.nr
				),
				contre: percent(
					count({ ...criteres.consommation.nr, ...criteres.choixBref.contre }),
					nbrConsommation.nr
				),
			},
		};

		const repressionLimiteAmpleur = {
			non: countTotal(criteres.repressionLimiteAmpleur.non),
			oui: countTotal(criteres.repressionLimiteAmpleur.oui),
			nr: countTotal(criteres.repressionLimiteAmpleur.nr),
		};

		const dispositifLutteContreTrafics = {
			non: countTotal(criteres.dispositifLutteContreTrafics.non),
			oui: countTotal(criteres.dispositifLutteContreTrafics.oui),
			nr: countTotal(criteres.dispositifLutteContreTrafics.nr),
		};

		const pourquoiAssouplir = [
			getCountTotalPerValue(keys.pourquoiAssouplir[0], pour),
			getCountTotalPerValue(keys.pourquoiAssouplir[1], pour),
			getCountTotalPerValue(keys.pourquoiAssouplir[2], pour),
			getCountTotalPerValue(keys.pourquoiAssouplir[3], pour),
		];

		const pourCulturePerso = {
			oui: percent(count(criteres.pourCulturePerso.oui), pour),
			non: percent(count(criteres.pourCulturePerso.non), pour),
			nr: percent(count(criteres.pourCulturePerso.nr), pour),
		};

		const quoiPayerAvecTaxes = [
			getCountTotalPerValue(keys.quoiPayerAvecTaxes[0], pour),
			getCountTotalPerValue(keys.quoiPayerAvecTaxes[1], pour),
			getCountTotalPerValue(keys.quoiPayerAvecTaxes[2], pour),
			getCountTotalPerValue(keys.quoiPayerAvecTaxes[3], pour),
			getCountTotalPerValue(keys.quoiPayerAvecTaxes[4], pour),
		];

		const commentVendre = getCountTotalPerValue(keys.commentVendre, pour);

		const pourquoiDurcir = [
			getCountTotalPerValue(keys.pourquoiDurcir[0], contre),
			getCountTotalPerValue(keys.pourquoiDurcir[1], contre),
			getCountTotalPerValue(keys.pourquoiDurcir[2], contre),
			getCountTotalPerValue(keys.pourquoiDurcir[3], contre),
			getCountTotalPerValue(keys.pourquoiDurcir[4], contre),
			getCountTotalPerValue(keys.pourquoiDurcir[5], contre),
			getCountTotalPerValue(keys.pourquoiDurcir[6], contre),
		];

		const data = {
			sexes,
			consommateurs,
			ages,
			fini,
			types,
			choix,
			choixBref,
			choixParSexe,
			choixParTrancheAge,
			consommateurs18_64,
			consommateurs18_29,
			regions: regions.slice(0, 3),
			avisSelonConsommation,
			repressionLimiteAmpleur,
			dispositifLutteContreTrafics,
			comparaisonAlcool: getCountTotalPerValue(keys.comparaisonAlcool),
			comparaisonTabac: getCountTotalPerValue(keys.comparaisonTabac),

			// que du pour
			pourquoiAssouplir,
			commentVendre,
			quoiPayerAvecTaxes,
			pourCulturePerso,

			// que du contre
			pourquoiDurcir,
		};

		console.log(data);

		fs.writeFileSync("./dataRapport.json", JSON.stringify(data));
	});

function getValues(key) {
	const values = results.map((r) => r[key]);
	return [...new Set(values)];
}

function countTotal(where) {
	return percent(count(where));
}

function count(where) {
	const criteres = Object.entries(where);
	return results.filter((result) => {
		return criteres.every(([key, values]) => {
			return values.includes(result[key]);
		});
	}).length;
}

function percent(nbr, total = results.length) {
	return Math.round((nbr / total) * 100);
}

function getCountTotalPerValue(key, percentBase = results.length) {
	const arr = results.map((r) => r[key]);
	const values = arr.reduce(
		(acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
		{}
	);
	return Object.entries(values)
		.sort((a, b) => b[1] - a[1])
		.map(([key, val]) => ({ [key]: percent(val, percentBase) }));
}

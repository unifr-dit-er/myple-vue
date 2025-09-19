import { readItem, readTranslations } from "@directus/sdk"
import type { Tool, ToolStep } from "@/types/tool"
import type { Translation } from "@/server/utils/directus"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'
  //const translations = await useDirectus().request(readTranslations({ limit: -1 })) as Translation[]
  const translations: Translation[] = [{"key":"duration-day","language":"fr-FR","value":"Journée"},{"key":"duration-day","language":"de-DE","value":"Tag"},{"key":"duration-day","language":"it-IT","value":"Giorno"},{"key":"duration-half-day","language":"fr-FR","value":"Demi-journée"},{"key":"duration-half-day","language":"de-DE","value":"Halbtag"},{"key":"duration-half-day","language":"it-IT","value":"Mezza giornata"},{"key":"family-agenda","language":"fr-FR","value":"Agenda"},{"key":"family-agenda","language":"de-DE","value":"Agenda"},{"key":"family-agenda","language":"it-IT","value":"Agenda"},{"key":"family-annotation-fichiers","language":"fr-FR","value":"Annotation de fichiers"},{"key":"family-annotation-fichiers","language":"de-DE","value":"Annotation von Dateien"},{"key":"family-annotation-fichiers","language":"it-IT","value":"Annotazione di file"},{"key":"family-banques-images","language":"fr-FR","value":"Banques d'images"},{"key":"family-banques-images","language":"de-DE","value":"Bild Banken"},{"key":"family-banques-images","language":"it-IT","value":"Banche immagini"},{"key":"family-bases-donnees-bibliographiques","language":"fr-FR","value":"Bases de données bibliographiques"},{"key":"family-bases-donnees-bibliographiques","language":"de-DE","value":"Bibliografische Datenbanken"},{"key":"family-bases-donnees-bibliographiques","language":"it-IT","value":"Banche dati bibliografiche"},{"key":"family-bloc-notes","language":"fr-FR","value":"Bloc-notes"},{"key":"family-bloc-notes","language":"de-DE","value":"Notizblock"},{"key":"family-bloc-notes","language":"it-IT","value":"Blocco note"},{"key":"family-carte-conceptuelle","language":"fr-FR","value":"Carte conceptuelle"},{"key":"family-carte-conceptuelle","language":"de-DE","value":"Konzeptbodenkarte"},{"key":"family-carte-conceptuelle","language":"it-IT","value":"Mappe concettuali"},{"key":"family-conversion-formats-fichiers","language":"fr-FR","value":"Conversion de formats de fichiers"},{"key":"family-conversion-formats-fichiers","language":"de-DE","value":"Formatkonvertierung von Dateien"},{"key":"family-conversion-formats-fichiers","language":"it-IT","value":"Conversione di formato di file"},{"key":"family-correction-texte","language":"fr-FR","value":"Correction de texte"},{"key":"family-correction-texte","language":"de-DE","value":"Textkorrektur"},{"key":"family-correction-texte","language":"it-IT","value":"Correzione del testo"},{"key":"family-creation-graphiques","language":"fr-FR","value":"Création de graphiques"},{"key":"family-creation-graphiques","language":"de-DE","value":"Erstellen von Grafiken"},{"key":"family-creation-graphiques","language":"it-IT","value":"Creazione di grafici"},{"key":"family-creation-presentations-visuelles","language":"fr-FR","value":"Création de présentations visuelles"},{"key":"family-creation-presentations-visuelles","language":"de-DE","value":"Erstellung von Präsentation"},{"key":"family-creation-presentations-visuelles","language":"it-IT","value":"Creazione di presentazioni visuali"},{"key":"family-dictionnaires","language":"fr-FR","value":"Dictionnaires"},{"key":"family-dictionnaires","language":"de-DE","value":"Wörterbücher"},{"key":"family-dictionnaires","language":"it-IT","value":"Dizionari"},{"key":"family-e-portfolio","language":"fr-FR","value":"E-Portfolio"},{"key":"family-e-portfolio","language":"de-DE","value":"E-Portfolio"},{"key":"family-e-portfolio","language":"it-IT","value":"E-Portfolio"},{"key":"family-enquete-enligne","language":"fr-FR","value":"Enquête en ligne"},{"key":"family-enquete-enligne","language":"de-DE","value":"Online-Umfrage"},{"key":"family-enquete-enligne","language":"it-IT","value":"Sondaggio online"},{"key":"family-feuille-calcul","language":"fr-FR","value":"Feuille de calcul"},{"key":"family-feuille-calcul","language":"de-DE","value":"Tabellenkalkulation"},{"key":"family-feuille-calcul","language":"it-IT","value":"Foglio di calcolo"},{"key":"family-gestion-bibliographique","language":"fr-FR","value":"Gestion bibliographique"},{"key":"family-gestion-bibliographique","language":"de-DE","value":"Literatur Verwaltung"},{"key":"family-gestion-bibliographique","language":"it-IT","value":"Gestione bibliografia"},{"key":"family-intelligence-artificielle","language":"fr-FR","value":"Intelligence artificielle"},{"key":"family-intelligence-artificielle","language":"de-DE","value":"Künstliche Intelligenz"},{"key":"family-intelligence-artificielle","language":"it-IT","value":"Intelligenza artificiale"},{"key":"family-organiseur-taches","language":"fr-FR","value":"Organiseur de tâches"},{"key":"family-organiseur-taches","language":"de-DE","value":"Aufgabenmanagement"},{"key":"family-organiseur-taches","language":"it-IT","value":"Gestione delle attività"},{"key":"family-outils-video","language":"fr-FR","value":"Outils vidéo"},{"key":"family-outils-video","language":"de-DE","value":"Video-Tools"},{"key":"family-outils-video","language":"it-IT","value":"Strumenti video"},{"key":"family-plateforme-cours","language":"fr-FR","value":"Plateforme de cours"},{"key":"family-plateforme-cours","language":"de-DE","value":"Lernplattform"},{"key":"family-plateforme-cours","language":"it-IT","value":"Piattaforma per la formazione"},{"key":"family-protection-donnees","language":"fr-FR","value":"Protection des données"},{"key":"family-protection-donnees","language":"de-DE","value":"Datenschutz"},{"key":"family-protection-donnees","language":"it-IT","value":"Protezione dati"},{"key":"family-questions-idees-votes","language":"fr-FR","value":"Questions-Idées-Votes"},{"key":"family-questions-idees-votes","language":"de-DE","value":"Frage-Ideen-Stimmen"},{"key":"family-questions-idees-votes","language":"it-IT","value":"Domande-Idee-Voti"},{"key":"family-recherche-informations","language":"fr-FR","value":"Recherche d'informations"},{"key":"family-recherche-informations","language":"de-DE","value":"Informationssuche"},{"key":"family-recherche-informations","language":"it-IT","value":"Ricerca d'informazione"},{"key":"family-reseaux-sociaux","language":"fr-FR","value":"Réseaux sociaux"},{"key":"family-reseaux-sociaux","language":"de-DE","value":"Soziale Netzwerke"},{"key":"family-reseaux-sociaux","language":"it-IT","value":"Social Network"},{"key":"family-reunions-enligne","language":"fr-FR","value":"Réunions en ligne"},{"key":"family-reunions-enligne","language":"de-DE","value":"Online-Sitzung"},{"key":"family-reunions-enligne","language":"it-IT","value":"Riunioni online"},{"key":"family-stockage-partage-fichiers-liens","language":"fr-FR","value":"Stockage et partage de fichiers-liens"},{"key":"family-stockage-partage-fichiers-liens","language":"de-DE","value":"Datenablage und Datenteilung"},{"key":"family-stockage-partage-fichiers-liens","language":"it-IT","value":"Immagazzinamento e condivisione dei documenti-link"},{"key":"family-tableau-blanc","language":"fr-FR","value":"Tableau blanc"},{"key":"family-tableau-blanc","language":"de-DE","value":"Whiteboard"},{"key":"family-tableau-blanc","language":"it-IT","value":"Lavagna digitale"},{"key":"family-traduction-texte","language":"fr-FR","value":"Traduction de texte"},{"key":"family-traduction-texte","language":"de-DE","value":"Textübersetzung"},{"key":"family-traduction-texte","language":"it-IT","value":"Traduzione del testo"},{"key":"family-traitement-texte","language":"fr-FR","value":"Traitement de texte"},{"key":"family-traitement-texte","language":"de-DE","value":"Textverarbeitung"},{"key":"family-traitement-texte","language":"it-IT","value":"Trattamento testi"},{"key":"family-utilitaire","language":"fr-FR","value":"Utilitaire"},{"key":"family-utilitaire","language":"de-DE","value":"Dienstprogramme"},{"key":"family-utilitaire","language":"it-IT","value":"Utility"},{"key":"modality-in-person","language":"fr-FR","value":"En présence"},{"key":"modality-in-person","language":"de-DE","value":"In Anwesenheit"},{"key":"modality-in-person","language":"it-IT","value":"In presenza"},{"key":"modality-online","language":"fr-FR","value":"En ligne"},{"key":"modality-online","language":"de-DE","value":"Online"},{"key":"modality-online","language":"it-IT","value":"Online"},{"key":"semester-always","language":"fr-FR","value":"Toujours disponible"},{"key":"semester-always","language":"de-DE","value":"Immer verfügbar"},{"key":"semester-always","language":"it-IT","value":"Sempre disponibile"},{"key":"semester-autumn","language":"fr-FR","value":"Automne"},{"key":"semester-autumn","language":"de-DE","value":"Herbst"},{"key":"semester-autumn","language":"it-IT","value":"Autunno"},{"key":"semester-spring","language":"fr-FR","value":"Printemps"},{"key":"semester-spring","language":"de-DE","value":"Frühlings"},{"key":"semester-spring","language":"it-IT","value":"Primavera"},{"key":"students-unifr","language":"fr-FR","value":"Étudiant·e·s UNIFR"},{"key":"students-unifr","language":"it-IT","value":"Studenti UNIFR"},{"key":"students-unifr","language":"de-DE","value":"UNIFR-Studenten"},{"key":"students-usi","language":"fr-FR","value":"Étudiant·e·s USI"},{"key":"students-usi","language":"it-IT","value":"Studenti USI"},{"key":"students-usi","language":"de-DE","value":"USI-Studenten"},{"key":"tag-addon-extension-plugin","language":"fr-FR","value":"Add-on; Extension; Plugin"},{"key":"tag-addon-extension-plugin","language":"de-DE","value":"Add-on; Extension; Plugin"},{"key":"tag-addon-extension-plugin","language":"it-IT","value":"Add-on; Extension; Plugin"},{"key":"tag-allemand","language":"fr-FR","value":"Allemand"},{"key":"tag-allemand","language":"de-DE","value":"Nur auf Deutsch"},{"key":"tag-allemand","language":"it-IT","value":"Tedesco"},{"key":"tag-anglais","language":"fr-FR","value":"Anglais"},{"key":"tag-anglais","language":"de-DE","value":"Englisch"},{"key":"tag-anglais","language":"it-IT","value":"Inglese"},{"key":"tag-app-android","language":"fr-FR","value":"App Android"},{"key":"tag-app-android","language":"de-DE","value":"Android App"},{"key":"tag-app-android","language":"it-IT","value":"Android App"},{"key":"tag-app-ios","language":"fr-FR","value":"App iOS"},{"key":"tag-app-ios","language":"de-DE","value":"iOS App"},{"key":"tag-app-ios","language":"it-IT","value":"iOS App"},{"key":"tag-francais","language":"fr-FR","value":"Français"},{"key":"tag-francais","language":"de-DE","value":"Französisch"},{"key":"tag-francais","language":"it-IT","value":"francese"},{"key":"tag-gratuit","language":"fr-FR","value":"Gratuit"},{"key":"tag-gratuit","language":"de-DE","value":"Kostenlos"},{"key":"tag-gratuit","language":"it-IT","value":"Gratuito"},{"key":"tag-italien","language":"fr-FR","value":"Italien"},{"key":"tag-italien","language":"de-DE","value":"Italienisch"},{"key":"tag-italien","language":"it-IT","value":"Italiano"},{"key":"tag-linux","language":"fr-FR","value":"Linux"},{"key":"tag-linux","language":"de-DE","value":"Linux"},{"key":"tag-linux","language":"it-IT","value":"Linux"},{"key":"tag-mac-os","language":"fr-FR","value":"Mac OS"},{"key":"tag-mac-os","language":"de-DE","value":"Mac OS"},{"key":"tag-mac-os","language":"it-IT","value":"Mac OS"},{"key":"tag-multilingue","language":"fr-FR","value":"Multilingue"},{"key":"tag-multilingue","language":"de-DE","value":"Mehrsprachig"},{"key":"tag-multilingue","language":"it-IT","value":"Multilingua"},{"key":"tag-online","language":"fr-FR","value":"Online"},{"key":"tag-online","language":"de-DE","value":"Online"},{"key":"tag-online","language":"it-IT","value":"Online"},{"key":"tag-open-source","language":"fr-FR","value":"Open source"},{"key":"tag-open-source","language":"de-DE","value":"Open source"},{"key":"tag-open-source","language":"it-IT","value":"Open source"},{"key":"tag-payant","language":"fr-FR","value":"Payant"},{"key":"tag-payant","language":"de-DE","value":"Kostenpflichtig"},{"key":"tag-payant","language":"it-IT","value":"Pagando"},{"key":"tag-paye-pour-unifr","language":"fr-FR","value":"Payé pour UniFr"},{"key":"tag-paye-pour-unifr","language":"de-DE","value":"bezahlt für UniFr"},{"key":"tag-paye-pour-unifr","language":"it-IT","value":"Pagato per UniFr"},{"key":"tag-paye-pour-usi","language":"fr-FR","value":"Payé pour USI"},{"key":"tag-paye-pour-usi","language":"de-DE","value":"Für USI bezahlt"},{"key":"tag-paye-pour-usi","language":"it-IT","value":"Pagato per USI"},{"key":"tag-telecharger","language":"fr-FR","value":"Télécharger"},{"key":"tag-telecharger","language":"de-DE","value":"Herunterladen"},{"key":"tag-telecharger","language":"it-IT","value":"Scaricarle"},{"key":"tag-version-gratuite-limitee","language":"fr-FR","value":"Version gratuite limitée"},{"key":"tag-version-gratuite-limitee","language":"de-DE","value":"Begrenzte kostenlose Version"},{"key":"tag-version-gratuite-limitee","language":"it-IT","value":"Versione gratuita limitata"},{"key":"tag-windows","language":"fr-FR","value":"Windows"},{"key":"tag-windows","language":"de-DE","value":"Windows"},{"key":"tag-windows","language":"it-IT","value":"Windows"}]

  const res = await useDirectus().request(
    readItem("tools", id, {
      fields: [
        "*", "translations.*", 
        "families.tool_families_id.*", "families.tool_families_id.translations.title",
        "families.tool_families_id.steps.steps_id.id", "families.tool_families_id.steps.steps_id.sort", "families.tool_families_id.steps.steps_id.translations.title",
        "families.tool_families_id.steps.steps_id.activity.id", "families.tool_families_id.steps.steps_id.activity.translations.title"
      ],
      deep: { 
        translations: { _filter: { languages_code: { _eq: lang } } },
        families: {
          tool_families_id: {
            translations: { _filter: { languages_code: { _eq: lang } } },
            steps: {
              steps_id: {
                translations: { _filter: { languages_code: { _eq: lang } } },
                activity: {
                  translations: { _filter: { languages_code: { _eq: lang } } }
                }
              }
            }
          }
        }
      }
    })
  )

  const tool = transform(res, translations, lang)
  return tool
})

const transform = (response: any, translations: Translation[], lang: string): Tool => {
  const stepsMap = new Map<number, ToolStep>()

  response.families.forEach((family: any) => {
    family.tool_families_id.steps.forEach((step: any) => {
      const activity = step.steps_id.activity
      const activityTitle = activity.translations[0]?.title
      
      const stepId = step.steps_id.id
      if (!stepsMap.has(stepId)) {
        stepsMap.set(stepId, {
          id: stepId,
          title: step.steps_id.translations[0]?.title,
          activity: {
            id: activity.id,
            title: activityTitle
          },
          sort: step.steps_id.sort
        })
      }
    })
  })

  // Convert the stepsMap to an array and sort it
  const steps: ToolStep[] = Array.from(stepsMap.values())
  steps.sort((a, b) => a.activity.id - b.activity.id || a.sort - b.sort)

  return {
    id: response.id,
    title: response.title || "Missing title",
    image: `https://eddb.unifr.ch/didanum9-admin/assets/${response.image}/?width=160&height=160`,
    description: response.translations[0]?.description || "",
    families: response.families.map((family: any) => ({
      id: 1,
      title: family.tool_families_id.translations[0]?.title,
      slug: family.tool_families_id.slug
    })),
    tags: response.tags.map((tag: string) => dTranslate(translations, tag, lang)),
    urlOfficial: response.url_official,
    urlAlternativeto: response.url_alternativeto,
    urlUnifr: response.url_unifr,
    urlUsi: response.url_usi,
    steps
  }
}
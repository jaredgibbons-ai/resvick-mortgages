export default {
  "penticton": {
    str: "The City's rental guide says a short-term rental is 90 days or less. It allows up to 8 guests. Only the principal resident may offer one. The City's licence bylaw also asks for proof that the unit is the operator's principal residence.",
    suites: "Penticton is covered by the Province's small-scale multi-unit housing rules. The City adopted Zoning Bylaw No. 2024-22 in June 2024. It allows up to 4 units per lot in its urban small-scale zones. Three kinds of land are exempt from that density rule. They are rural areas, zones with lots of 0.4 hectares or more, and unserviced lots. Check with the City.",
    employers: [
      "Interior Health, Penticton Regional Hospital",
      "School District 67 (Okanagan Skaha), schools across the city",
      "Okanagan College, Penticton campus",
      "FortisBC, a utility the City lists as a local employer"
    ],
    lenders: "",
    areas: [
      { n: "Downtown", d: "City news pages describe new rental buildings and townhomes in the downtown area." },
      { n: "Wiltse", d: "A City news page lists new townhouses and single-family homes in Wiltse projects." },
      { n: "Skaha Lake area", d: "City news pages list townhouses, single-family homes and rental suites near the lake." },
      { n: "Sendero Canyon", d: "A City news page describes modern craftsman homes at higher elevations here." }
    ],
    mix: "The City's housing needs report uses 2021 Census numbers. It shows 63 percent of households own and 37 percent rent. Single-detached houses are 40 percent of homes. Apartments are about 36 percent.",
    land: "Penticton Indian Band reserve land borders the city on the west side. Satikw Crossing is band land leased out for development. It covers over 140 acres near Highway 97 and the airport. The band's development company says Skaha Hills uses 99 year term leases registered with Canada.",
    feature: "Check the land title before you offer on a home near the west side or Skaha Lake. Some projects there sit on band land. Lenders vary on leasehold homes.",
    src: [
      ["City of Penticton, short-term rental guide", "https://www.penticton.ca/sites/default/files/docs/business-and-building/Business%20Licences/LIC-Short-Term-Rental-Guide-Bulletin-26-08-23v3.2.pdf"],
      ["City of Penticton, Zoning Bylaw 2024-22 report", "https://www.penticton.ca/sites/default/files/docs/city-hall/news/Public%20Notices/2024/ZN%20Bylaw%202024-22/2024-05-21%20Agenda-Report%20%28Zoning%20Bylaw%20No.%202024-22%29.pdf"],
      ["City of Penticton, 2024 Housing Needs Report", "https://www.penticton.ca/sites/default/files/docs/our-community/living-here/2024%20Housing%20Needs%20Report_final.pdf"],
      ["City of Penticton, new homes being built", "https://www.penticton.ca/startherepenticton/latestupdates/take-peek-new-homes-being-built-penticton-right-now"],
      ["City of Penticton, Work Here", "https://www.penticton.ca/startherepenticton/workhere"],
      ["PIB Development Corporation, Skaha Hills", "https://www.pibdc.ca/business/skahahills/"]
    ],
    omitted: [
      "Bylaw No. 2026-01 (business licence bylaw) dropped from str to keep src at 6; it was confirmed only in the City's Jan 2026 council report, which is no longer in src.",
      "Valley First head office claim skipped (brief says skip Valley First).",
      "Skaha Hills: the old text said homes are 'sold on 99-year leases'. The PIB Development Corporation page says only '99 year term leases registered with Canada' and never says leasehold or who owns the land, so the sentence was reworded. Satikw Crossing page could not be fetched again (blocked), so its 140+ acre and leased-for-development wording still rests on the earlier read.",
      "Old claim that a 'large share' of west-side and Skaha growth land is leasehold is not supported by any page read, so it was removed from feature.",
      "Secondary suite 'no size cap, no owner-occupancy' claim still skipped (carriage house bulletin).",
      "Transportation Master Plan neighbourhoods (Columbia Heights, Skaha Lake Road corridor) not re-read. Replaced by areas from the City's new-homes news page. North Gateway (apartments and townhomes, per the City's plan page) and the Skaha Assembly site (BC Housing plan for about 600 rentals) were verified but left out of areas and src to keep four areas and six sources.",
      "Penticton Indian Band Lands Department page: says only that it advises on locatee leasing and registered leases. Not used.",
      "Statistics Canada sector counts are not named employers, left out. Government of Canada is listed on the City page but is too broad to name."
    ]
  },

  "osoyoos-oliver": {
    str: "Osoyoos needs a Town licence for a short-term rental. That is under Business Licence Bylaw No. 1400. The Town's page says it opted into the Province's principal residence rule. A rental may use the owner's home plus one suite or accessory dwelling. Oliver needs a Town business licence for a vacation rental. In low-density residential and rural zones, only the owner may run one. The owner must live on the parcel. Each parcel is limited to one.",
    suites: "Osoyoos is covered by the Province's small-scale multi-unit housing rules. The Town's page says Zoning Bylaw No. 1395 was adopted on September 24, 2024. It makes one RS1 zone where 3 or 4 units are allowed. The count depends on lot size and water and sewer service. Oliver is also covered. Oliver's page says it adopted Zoning Bylaw No. 1423. A public hearing was set for June 2024. The notice said up to 4 units per lot on single-family and duplex lots. Check with each Town before you rely on this.",
    employers: [
      "Interior Health, South Okanagan General Hospital, Oliver",
      "Okanagan Correctional Centre, on Osoyoos Indian Band land north of Oliver",
      "School District 53 (Okanagan Similkameen), schools in both towns",
      "BC Tree Fruits, a packinghouse for South Okanagan fruit",
      "Osoyoos Indian Band Development Corporation, band-owned golf course, campground, concrete firm and business park"
    ],
    lenders: "",
    areas: [
      { n: "Osoyoos, around downtown", d: "The Town's plan says the areas around downtown are mostly low-density, with single-detached homes." },
      { n: "Osoyoos, Dividend Ridge", d: "The Town's plan says it is mostly low-density, with single-detached homes." },
      { n: "Osoyoos, Cottonwood Drive", d: "The Town's plan names it as a pocket of multi-family homes in east Osoyoos." },
      { n: "Osoyoos, Southeast Meadowlark", d: "The Town's plan calls for low-rise, medium-density homes in this growth area." },
      { n: "Oliver, Tuc-el-nuit", d: "Oliver's plan says this area holds most of the town's empty lots for single-detached homes." },
      { n: "Oliver, Highway 97 corridor", d: "Oliver's plan says it mixes highway commercial use with single-family and multi-family homes." }
    ],
    mix: "Both towns' housing needs reports use the 2021 Census. In Osoyoos, 81 percent of households own, and 60 percent of homes are single-detached. In Oliver, 78 percent own, and 67 percent of homes are single-detached.",
    land: "Osoyoos has Osoyoos Indian Band land on the east side of the lake, says the Town's community plan. Oliver's plan says the band's reserve runs from Oliver to Osoyoos. The band's own site says its development company leases land to businesses. Check the land title on any home near the reserve. Lenders vary.",
    feature: "Osoyoos's plan lists hotels and food service, retail and health care among its main job sectors. Oliver's plan says health care is its largest sector. Ask a lender early how it counts seasonal pay.",
    src: [
      ["Town of Osoyoos, short-term rentals", "http://www.osoyoos.ca/short-term-rentals"],
      ["Town of Osoyoos, zoning bylaw update", "https://www.osoyoos.ca/node/1362"],
      ["Town of Oliver, vacation rental and B&B form", "https://www.oliver.ca/sites/oliver.ca/files/2024-07/Vacation%20Rental%20Business%20Form.pdf"],
      ["Town of Oliver, Official Community Plan Bylaw 1436", "https://www.oliver.ca/sites/oliver.ca/files/2026-07/OCP%20Bylaw%201436_2.pdf"],
      ["Town of Osoyoos, Official Community Plan", "https://www.osoyoos.ca/sites/osoyoos.ca/files/2024-12/OCPRedLined20240409.pdf"],
      ["Osoyoos Indian Band, businesses", "https://oib.ca/businesses/"]
    ],
    omitted: [
      "Osoyoos RS1 detail: the old text said 3 units on lots under 280 square metres and 4 on larger lots (from a council report not re-read). The Town's own update page says '3-4 units based on parcel size and servicing'; the August 2024 first-reading draft of Bylaw 1395 showed a narrower RS1 (two units, or a suite or accessory unit). Used the Town page wording only. Editor may want to confirm the 280 square metre split on the adopted bylaw.",
      "Oliver Zoning Bylaw 1423 adoption day (June 24, 2024 in the research) NOT CONFIRMED. Oliver's SSMUH page says only that it has adopted it, its planning page lists only first and second reading, and the public hearing notice gave June 3, 2024 as a tentative hearing date. Written as 'a public hearing was set for June 2024'.",
      "Osoyoos Business Licence Bylaw 1400: Town's STR page says Council resolved to adopt it on October 14, 2025 (matches the earlier text). The Town's page says the STR rules apply in RS1, a resort residential building in CT4, and AG zones. Fees not stated on the page (research said $750, left out as a dollar amount).",
      "Osoyoos opt-in: now stated on the Town's own STR page, so added to str. The Province's rule status is printed separately by the site.",
      "Spirit Ridge, Nk'Mip Cellars and Sonora Dunes tenure still NOT VERIFIED. The band's businesses page does not mention Spirit Ridge or Sonora Dunes. It says Arterra Wines Canada and Hyatt lease land from OIB Holdings, but does not tie Hyatt to Spirit Ridge, so no tenure claim was made.",
      "The band page says OIB Holdings owns over 32,000 acres leased to businesses. Not used, because the figure looks like all reserve land, not leased land. Land text says only that the development company leases land to businesses.",
      "Osoyoos request to delay SSMUH to 2029: still NOT VERIFIED. The Town's phase 2 SSMUH page is about OCP Amendment Bylaw 1375.09 (housing policy, hearing Oct 14, 2025) and says no zoning change was needed for the 20-year need. Not used.",
      "Osoyoos health centre and School District 53 appear in the Osoyoos plan, but the Oliver plan was the source for SD 53 as an employer. School District 53 head office in Oliver still NOT VERIFIED.",
      "Cascadia Credit Union head office is in Summerland, so no in-town lender. Statistics Canada sector counts and 'Wine Capital' phrase left out.",
      "Oliver Bed and Breakfast rule left out (owner must live on site and be present). Oliver's earlier Bylaw 1380 left out.",
      "Statistics Canada profile pages could not be opened in this session. Housing mix numbers come from each town's 2024 housing needs report, which cites the 2021 Census."
    ]
  },

  "keremeos": {
    str: "The Village's business licence page does not mention short-term rentals. It says home businesses must follow the zoning bylaw's home occupation rules. Check with the Village before you count on rental income.",
    suites: "The Province's 3 to 4 unit rule covers towns over 5,000 people. Keremeos is well under that. The Village's Zoning Bylaw No. 851 allows secondary suites and carriage houses on some lots. A zoning amendment, No. 851-10, aims at up to 3 units on serviced RS1 lots. It passed third reading in November 2025. A December 2025 report said adoption was deferred. We could not confirm the final status, so check with the Village.",
    employers: [
      "Interior Health, South Similkameen Health Centre",
      "Similkameen Elementary Secondary School, in Keremeos",
      "Lower Similkameen Community Services Society, community services and social housing",
      "Village of Keremeos, municipal government"
    ],
    lenders: "",
    areas: [],
    mix: "The Village's 2017 business recruitment plan says single-detached homes are the usual type. It says the Village lacks affordable multi-family and small-lot homes.",
    land: "",
    feature: "The Village's zoning bylaw marks some parcels as floodplain. On those parcels, only one of a secondary suite or an accessory dwelling is allowed. Floodplain status can affect value and insurance, so check it early.",
    src: [
      ["Village of Keremeos, zoning bylaw and amendment", "https://keremeos.civicweb.net/document/12331/"],
      ["Village of Keremeos, Bylaw 851-10 adoption report", "https://keremeos.civicweb.net/document/12332/"],
      ["Village of Keremeos, business licence page", "https://www.keremeos.ca/business-licence-and-inter-community-business-licence"],
      ["Village of Keremeos, 2017 business recruitment and resident attraction strategy", "https://www.keremeos.ca/files/documents/2017-05-15-FINALBusinessRecruitmentResidentAttractionStrategy-17041WITHEDITS21.pdf"],
      ["Village of Keremeos, area opportunities guide", "https://www.keremeos.ca/keremeos-area-opportunities-guide"],
      ["Interior Health, South Similkameen Health Centre", "https://www.interiorhealth.ca/locations/south-similkameen-health-centre"]
    ],
    omitted: [
      "Bylaw 851-10 final status still NOT CONFIRMED. The Village's civicweb files (consolidated zoning bylaw 'revised June 10, 2026', Aug 2026 agenda) are blocked to automated reads. The Village's planning page lists only Zoning Bylaw 851 and OCP Bylaw 850, with no amendment list. Editor should check the consolidated bylaw on keremeos.civicweb.net by hand.",
      "STR: the Village's business licence page (Business Regulation Bylaw No. 757, general licence) and accommodations page do not mention short-term rentals. No STR bylaw found, so str only says that. Bylaw 757 number left out.",
      "Neighbourhoods: the Village's 2017 recruitment plan names no neighbourhoods, only places on 7th Avenue and the river. The OCP (Bylaw 850) could not be opened. areas stays empty.",
      "Land: the Lower Similkameen Indian Band reserve lands page would not open, so land stays empty. 'None known' is not a verified fact.",
      "Employers: the 2017 plan names the Healthcare Centre and K-12 education but no private employers. Agriculture and band administration still NOT VERIFIED. The school name comes from a photo caption on the Village's guide page. Village is listed only to reach four.",
      "mix: 2017 plan is old. Census and the 2024 RDOS housing needs report (which covers Keremeos) could not be opened (Statistics Canada and the RDOS PDF blocked), so no owner and renter shares.",
      "Lender: Cascadia branch only, no head office in town, left out.",
      "Provincial SSMUH page link in the research has a typo, so not used in src."
    ]
  },

  "princeton": {
    str: "The Town's business licence page does not mention short-term rentals. Check with the Town before you count on rental income.",
    suites: "Princeton is below the 5,000 population line for the Province's 3 to 4 unit rule. The Town changed its zoning bylaw in 2022. A lot may have one carriage house or one secondary suite, but not both. Suites must be 32 to 125 square metres. They can be no more than 40 percent of the main home. The Town's rules do not require the owner to live on site. The Town says a new zoning bylaw is being written to match its 2023 community plan. Check with the Town before you rely on this.",
    employers: [
      "Copper Mountain Mine (Hudbay Minerals), an open-pit copper mine about 20 kilometres south of town. Its site says about 715 direct jobs.",
      "Interior Health, Princeton General Hospital, a Level 1 community hospital",
      "School District 58 (Nicola-Similkameen), two elementary schools and one high school",
      "Town of Princeton, which also runs Princeton Regional Airport"
    ],
    lenders: "",
    areas: [],
    mix: "The Town's community page lists apartments, condos, seniors housing, standard lots and estate lots of one to two acres.",
    land: "",
    feature: "Mining made up about 20 percent of Princeton's labour force in the 2021 Census. Manufacturing was second. When most jobs sit with a few employers, a lender may ask more about job type and stability. Lenders vary.",
    src: [
      ["Copper Mountain Mine, FAQ", "https://hudbaycoppermountain.com/faq/"],
      ["Town of Princeton, zoning amendment bylaw", "https://princeton.civicweb.net/document/50357"],
      ["Town of Princeton, about Princeton", "https://www.princeton.ca/p/about-princeton"],
      ["Town of Princeton, Official Community Plan", "https://princeton.ca/p/ocp"],
      ["Interior Health, Princeton General Hospital", "https://www.interiorhealth.ca/locations/princeton-general-hospital"],
      ["Statistics Canada, 2021 Census Profile, Princeton", "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=E&DGUIDlist=2021A00055907024"]
    ],
    omitted: [
      "STR: the Town's business licence page and FAQ do not mention short-term rentals, and no STR bylaw was found. str says only that. The Town's zoning bylaw (civicweb) is blocked to automated reads, so any zoning rule on rentals is unchecked.",
      "Bylaw 1022 adoption date still NOT VERIFIED (civicweb blocked), so no date given. The Town's OCP page says OCP Bylaw No. 1044 was adopted December 20, 2023; the strategic plan says a new zoning bylaw is being created to match it. Numbers left out to stay readable.",
      "Neighbourhoods: the Town's pages name none (OCP document would not open). areas stays empty.",
      "mix: the Town's about page has no counts or shares, so it is described only by type. Statistics Canada and housing needs report pages could not be opened (blocked).",
      "Copper Mountain 715 jobs figure rests on the earlier read of the mine's FAQ (page could not be fetched again). Payroll and 'rising to 830' left out.",
      "Similkameen Forest Products (Gorman Group) left out: sourced to a Province news release.",
      "School District 58 line uses the Town's about page (two elementary schools and one high school). The Town is listed only to reach four.",
      "Valley First branch is not a head office, left out. Land: 'none known' is not a verified fact, left empty.",
      "Census median income and self-employment figures left out as not needed."
    ]
  },

  "invermere": {
    str: "The District's licensing bylaw says a short-term rental needs a District licence. The bylaw is No. 1647. A rental may run only where zoning allows it, or under a Temporary Use Permit. The same guest cannot stay more than 28 days in a row. The District was working on a replacement licence bylaw in late 2025. Check its page for the current rules.",
    suites: "Invermere is under the 5,000 population line for the Province's 3 to 4 unit rule. Zoning Bylaw No. 1145 allows one secondary suite per lot. A suite inside the main home can use up to 40 percent of the floor space. It can be up to 90 square metres. A suite in an accessory building can be up to 75 square metres. In October 2025 District staff were told to look at dropping the owner-must-live-there rule for suites. Check with the District for the current status.",
    employers: [
    ],
    lenders: "",
    areas: [
      { n: "Westside", d: "District referral papers describe it as a rural-residential and small-holdings area on Johnson Road, west of the District." }
    ],
    land: "",
    feature: "Short-term rental income in Invermere depends on a District licence and on zoning. Check both before you count that income in a mortgage plan.",
    src: [
      ["District of Invermere, Business Licencing Bylaw No. 1647", "https://invermere.net/wp-content/uploads/2023/12/bylaw-1647-business-licencing-bylaw-1st-2nd-reading.pdf"],
      ["District of Invermere, Committee of the Whole minutes, 14 October 2025", "https://invermere.civicweb.net/document/59035/Committee%20of%20the%20Whole%20-%2014%20Oct%202025%20-%20Minutes.pdf?handle=F23F5F3FC3E948FC9D9F2C984FF29B75"],
      ["District of Invermere, secondary suite rules (Zoning Bylaw 1145)", "https://invermere.civicweb.net/filepro/document/54000/Letter.pdf"]
    ],
    omitted: [
      "Still thin: this session could not open the District's short-term rental page, Athalmer Neighbourhood Plan page, 2026 budget booklet or civicweb files (blocked to automated reads), and the search tool ran out of budget. Nothing new was verified for Invermere.",
      "Bylaw 1647 adopted text NOT CONFIRMED: the PDF in src is the first and second reading version. The District's home page lists a separate STR application and an STR page (invermere.net/short-term-rentals) that should be checked by hand.",
      "Leads for the editor, not verified: the District has an Athalmer Neighbourhood Plan page (invermere.net/athalmer-neighbourhood-plan); the District's housing page says the Columbia Valley Housing Need and Demand Assessment was done in 2013 and that Family Dynamix Association is a not-for-profit based in Invermere; the OCP page says the OCP update began in 2014 with a 2015 update.",
      "Bylaw 1683 (replacement licence bylaw) and Zoning Amendment 1686 adoption NOT VERIFIED, so those numbers were left out. The $500 renewal fee is tied to the unadopted bylaw, left out.",
      "Suite size rules are cited to a civicweb file named 'Letter.pdf', which may be a referral letter quoting the bylaw.",
      "Shuswap Band (Kenpesq't) employer and reserve land claims are sourced to fesbc.ca, not an official source, so land is empty and the employer is left out. SKIP partnership left out.",
      "Interior Health hospital NOT VERIFIED. Lenders NOT VERIFIED. Other neighbourhoods NOT VERIFIED. Panorama employer line cites a District agenda about the hotel tax program, so it stays out.",
      "'Second-home and resort market' wording from the research feature not used; its source does not support it."
    ]
  },

  "revelstoke": {
    str: "Revelstoke needs a City business licence for a short-term rental. The City's 2025 guide cites Zoning Bylaw No. 2406. In its standard zones, a rental can have up to 4 sleeping units and 8 guests. It needs a resident operator with 24 hour property management. A whole-home rental needs 24 hour management. Garden and carriage suites cannot be rented. Some zones have their own rules. Check with the City.",
    suites: "Revelstoke is covered by the Province's small-scale multi-unit housing rules. The City changed its zoning in Bylaw No. 2380. An R1 lot can have up to 4 units. A lot of 280 square metres or less can have up to 3. A secondary suite can be up to 90 square metres and up to 40 percent of the floor space. We did not confirm when the change was adopted. The City's rental guide cites a newer zoning bylaw, so check with the City.",
    employers: ["Revelstoke Mountain Resort, a ski and summer mountain resort on Mount Mackenzie"],
    lenders: "",
    areas: [],
    land: "",
    feature: "Accommodation and food services is Revelstoke's largest job sector in the 2021 Census. If a purchase counts on rental income, check the City's licence and operator rules first.",
    src: [
      ["City of Revelstoke, Short-Term Rental and B&B Operator Guidebook (2025)", "https://www.revelstoke.ca/DocumentCenter/View/11892/2025-09-25-Short-Term-Rental-and-BB-Operator-Guidebook-PDF-?bidId="],
      ["City of Revelstoke, Business Licensing", "https://www.revelstoke.ca/2054/Business-Licensing"],
      ["City of Revelstoke, Zoning Amendment Bylaw No. 2380 (Bill 44)", "https://revelstoke.civicweb.net/FileStorage/51B831DA04834DFABE72509C50EB6C41-2380%20-%20Zoning%20Amendment%20Bylaw%20Bill%2044%20for%20EDAS%20sub.pdf"],
      ["Revelstoke Mountain Resort", "https://www.revelstokemountainresort.com/"]
    ],
    omitted: [
      "CONFLICT: the earlier text used Zoning Bylaw No. 2299 s. 5.19 (Amendment 2295: STR only as accessory use to a single-family home with a suite, permanent resident living on site). The City's September 2025 STR guidebook cites Zoning Bylaw No. 2406 (s. 6.6.6) and says standard zones (MU-1, MU-3, R-LD6) allow STRs with a resident operator plus 24 hour management, or whole-home rentals with 24 hour management, max 4 sleeping units and 8 occupants. The permanent-resident-present rule now applies to MU-2 and 59 listed properties. Zoning Bylaw 2406 appears to replace 2299, so str was rewritten from the guidebook. Editor should confirm 2406 against the zoning bylaw. The guidebook is read through a summary, not the original layout.",
      "Because 2406 may have replaced 2299, the SSMUH text (Bylaw 2380 amending 2299) may now sit inside 2406. Bylaw 2380 adoption date NOT CONFIRMED (City public notices page and business pages do not mention it). Hedged in suites.",
      "Dropped: Bylaw 1503 and licence fees ($500 plus per-bedroom amount, dollar amounts left out), the 120 day caps in CD 4 and CD 7, and the guidebook's inconsistent fine amounts.",
      "Employers: the City's economic development page lists no employers; chooserevelstoke.ca could not be opened. Resort page confirms winter lifts and summer coaster, bike park and skywalk, and says it is a Northland Properties company. BC Hydro dam, Gorman Group mills and CPKC NOT VERIFIED (blocked or not official).",
      "Lender: Cascadia has its head office in Summerland, so no in-town lender.",
      "Neighbourhoods NOT VERIFIED. Land 'none known' is not a verified fact, left empty. 'Strata-hotel product at the mountain base' has no official source, left out.",
      "Old src entries for Bylaw 2305 and Amendment 2295 removed as superseded."
    ]
  },

  "fernie": {
    str: "A short-term rental in Fernie needs a City licence. The licence is under Business Licensing and Regulation Bylaw No. 2028. The City raised its licence fees in August 2025. In residential zones, a rental is allowed only in the owner's legal principal residence. Condo and hotel rentals are allowed only in specially zoned developments, such as Silver Rock and parts of Pinnacle Ridge. No rentals are allowed in carriage houses, garage suites, secondary suites or garden homes.",
    suites: "Fernie is covered by the Province's small-scale multi-unit housing rules. A zoning amendment, adopted in June 2024, created the RSS Residential Small-Scale zone. The amendment is No. 2517. It also merged the older residential zones. It follows the Province's standard of up to 4 units per lot. Lots of 280 square metres or less get up to 3. Check with the City before you rely on this.",
    employers: [
      "Elk Valley Resources, four steelmaking coal mines in the Elk Valley. Its fact sheet says about 780 jobs in Fernie."
    ],
    lenders: "",
    areas: [],
    land: "",
    feature: "Mining is Fernie's largest industry in the 2021 Census. Elk Valley Resources says it sustains about 780 jobs in the city. When income depends on one employer group, a lender may ask more about job stability. Lenders vary.",
    src: [
      ["City of Fernie, short-term rental page", "https://letstalk.fernie.ca/str"],
      ["City of Fernie, zoning amendment (small-scale zone)", "https://fernie.civicweb.net/document/173397/"],
      ["Elk Valley Resources, what we do", "https://www.glencore.ca/en/evr/what-we-do"]
    ],
    omitted: [
      "Still thin: no new Fernie pages could be opened this session besides the City's STR page (the search tool ran out of budget; the City's home page, civicweb and the EVR page are not reachable). Employers, neighbourhoods and mix not filled.",
      "Confirmed on the City's STR page: Business Licensing and Regulation Bylaw No. 2028, Amendment Bylaw No. 2529 adopted at the August 26, 2025 council meeting, new fee levels for primary-residence and condo or hotel STRs (dollar amounts left out), the condo and hotel examples (Silver Rock, parts of Pinnacle Ridge), and the ban in carriage houses, garage suites, secondary suites and garden homes. The page names no zones or zoning bylaw number, so the old 'C-1, C-HWY and CD-2' list was dropped. Bylaw 2529 number left out to stay within two numbers.",
      "Fernie Alpine Resort and its operator NOT VERIFIED (job-board evidence only), left out.",
      "Lenders NOT VERIFIED. Neighbourhood names came from a real-estate source only, left out. Land 'none known' is not a verified fact, left empty.",
      "Zoning Bylaw 1750 number left out. The 4 and 3 unit figures come from the provincial regulation, so they are worded as following the Province's standard. The June 11, 2024 adoption day for Amendment 2517 is not re-confirmed, so only 'June 2024' is used.",
      "Median household income left out."
    ]
  }
};

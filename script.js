
'use strict';

/* ==================================
   01. TRANSLATION HELPERS
================================== */

const pair = (en, hu) => ({ en, hu });

const opts = (...items) =>
    items.map(([en, hu]) => pair(en, hu));

const text = (id, en, hu, type = 'text') => ({
    id,
    label: pair(en, hu),
    type
});

const choice = (id, en, hu, options, multiple = false) => ({
    id,
    label: pair(en, hu),
    type: multiple ? 'checkbox' : 'radio',
    options
});


/* ==================================
   02. COMMON TASTING OPTIONS
================================== */

const mediumMinus = ['Medium −', 'Közepes −'];
const mediumPlus = ['Medium +', 'Közepes +'];

const levels = opts(
    ['Low', 'Alacsony'],
    mediumMinus,
    mediumPlus,
    ['High', 'Magas']
);

const intensity = opts(
    ['Muted', 'Visszafogott'],
    mediumMinus,
    mediumPlus,
    ['Pronounced', 'Intenzív']
);

const aromas = opts(
    ['Fruity', 'Gyümölcsös'],
    ['Floral', 'Virágos'],
    ['Vegetal', 'Vegetális'],
    ['Spicy', 'Fűszeres'],
    ['Wood', 'Fa'],
    ['Other', 'Egyéb']
);


/* ==================================
   03. WINE TASTING SECTIONS
================================== */

const sections = [

    /* 01. THE BOTTLE */

    {
        id: 'bottle',

        title: pair(
            'The bottle',
            'A bor'
        ),

        fields: [

            text(
                'wine',
                'Wine name',
                'Bor neve'
            ),

            text(
                'winery',
                'Winery',
                'Borászat'
            ),

            text(
                'vintage',
                'Vintage',
                'Évjárat'
            ),

            text(
                'grape',
                'Grape variety',
                'Szőlőfajta'
            ),

            text(
                'region',
                'Region / country',
                'Borvidék / ország'
            ),

            choice(
                'type',
                'Wine type',
                'Bor típusa',
                opts(
                    ['Red', 'Vörös'],
                    ['White', 'Fehér'],
                    ['Rosé', 'Rozé'],
                    ['Orange', 'Narancsbor'],
                    ['Sparkling', 'Pezsgő'],
                    ['Fortified', 'Erősített bor'],
                    ['Other', 'Egyéb']  
                )
            ),

                    text(
                        'otherWineType',
                        'Specify other wine type',
                        'Egyéb bor típusa'
)

        ]
    },


    /* 02. THE OCCASION */

    {
        id: 'moment',

        title: pair(
            'The occasion',
            'Az alkalom'
        ),

        fields: [

            text(
                'date',
                'Date',
                'Dátum',
                'date'
            ),

            text(
                'occasion',
                'Occasion',
                'Alkalom'
            ),

            text(
                'place',
                'Place',
                'Helyszín'
            ),

            text(
                'company',
                'Company',
                'Társaság'
            )

        ]
    },


    /* 03. APPEARANCE — MEGJELENÉS */

    {
        id: 'appearance',

        title: pair(
            'Appearance',
            'Megjelenés'
        ),

        fields: [

            choice(
                'visualClarity',
                'Clarity',
                'Tisztaság',
                opts(
                    ['Clear', 'Tiszta'],
                    ['Cloudy', 'Zavaros']
                )
            ),

            choice(
                'visualIntensity',
                'Intensity',
                'Intenzitás',
                opts(
                    ['Pale', 'Halvány'],
                    ['Medium', 'Közepes'],
                    ['Deep', 'Mély']
                )
            ),

            choice(
                'colour',
                'Colour',
                'Szín',
                opts(
                    ['Greenish', 'Zöldes'],
                    ['Straw', 'Szalma'],
                    ['Lemon', 'Citrom'],
                    ['Gold', 'Arany'],
                    ['Pink', 'Rózsaszín'],
                    ['Orange', 'Narancs'],
                    ['Salmon', 'Lazac'],
                    ['Purple', 'Bíbor'],
                    ['Ruby', 'Rubin'],
                    ['Garnet', 'Gránát'],
                    ['Brown', 'Barna']
                )
            ),

            choice(
                'viscosity',
                'Viscosity',
                'Viszkozitás',
                opts(
                    ['Legs', 'Lábak']
                ),
                true
            ),

            choice(
                'visualOther',
                'Other observations',
                'Egyéb',
                opts(
                    ['Carbon dioxide bubbles', 'Szénsavgyöngy'],
                    ['Tartrate crystals', 'Borkő'],
                    ['Tannin', 'Tannin']
                ),
                true
            )

        ]
    },


    /* 04. NOSE — ILLAT */

    {
        id: 'nose',

        title: pair(
            'Nose',
            'Illat'
        ),

        fields: [

            choice(
                'noseClarity',
                'Cleanliness',
                'Tisztaság',
                opts(
                    ['Clean', 'Tiszta'],
                    ['Questionable', 'Bizonytalan']
                )
            ),

            choice(
                'noseIntensity',
                'Intensity',
                'Intenzitás',
                intensity
            ),

            choice(
                'noseMaturity',
                'Development',
                'Érettség',
                opts(
                    ['Youthful', 'Fiatal'],
                    ['Developing', 'Fejlődő'],
                    ['Mature', 'Érett']
                )
            ),

            choice(
                'noseAroma',
                'Aroma',
                'Aroma',
                aromas,
                true
            )

        ]
    },


    /* 05. PALATE — ÍZÖSSZETÉTEL */

    {
        id: 'palate',

        title: pair(
            'Palate',
            'Ízösszetétel'
        ),

        fields: [

            choice(
                'sweetness',
                'Sweetness',
                'Cukor',
                opts(
                    ['Dry', 'Száraz'],
                    ['Off-dry', 'Félszáraz'],
                    ['Medium sweet', 'Félédes'],
                    ['Sweet', 'Édes']
                )
            ),

            choice(
                'acidity',
                'Acidity',
                'Sav',
                levels
            ),

            choice(
                'tannin',
                'Tannin',
                'Tannin',
                levels
            ),

            choice(
                'body',
                'Body',
                'Test',
                opts(
                    ['Light', 'Könnyű'],
                    mediumMinus,
                    mediumPlus,
                    ['Full', 'Telt']
                )
            ),

            choice(
                    'alcohol',
                    'Alcohol',
                    'Alkohol',
                    opts(
                        mediumMinus,
                        mediumPlus,
                        ['High', 'Magas']
                    )
),

            choice(
                'flavourIntensity',
                'Flavour intensity',
                'Aroma intenzitás',
                intensity
            ),

            choice(
                'flavours',
                'Flavours',
                'Aroma',
                aromas,
                true
            ),

            choice(
    'finish',
    'Finish',
    'Hosszúság',
    opts(
        ['Short', 'Rövid'],
        mediumMinus,
        mediumPlus,
        ['Long', 'Hosszú']
    )
)
        ]
    },


    /* 06. CONCLUSIONS — KÖVETKEZTETÉSEK */

    {
        id: 'conclusions',

        title: pair(
            'Conclusions',
            'Következtetések'
        ),

        fields: [

            choice(
                'quality',
                'Quality',
                'Minőség',
                opts(
                    ['Poor', 'Gyenge'],
                    ['Acceptable', 'Elfogadható'],
                    ['Good', 'Jó'],
                    ['Excellent', 'Kiváló']
                )
            ),

            choice(
                'maturity',
                'Maturity',
                'Érettség',
                opts(
                    ['Not ready', 'Éretlen'],
                    [
                        'Ready to drink, but can age further',
                        'Fogyasztható, de még érlelhető'
                    ],
                    ['At its peak', 'Csúcsán van'],
                    ['Declining', 'Hanyatlik']
                )
            ),

            choice(
                'balance',
                'Balance',
                'Egyensúly',
                opts(
                    ['Perfect', 'Tökéletes'],
                    ['Good', 'Jó'],
                    ['Unbalanced', 'Nincs']
                )
            ),

            text(
                'potential',
                'Potential',
                'Potenciál'
            ),

            text(
                'value',
                'Value for money',
                'Ár/érték arány'
            ),

            text(
                'typicity',
                'Typical of the wine?',
                'Adott bornak megfelel-e?'
            ),

            text(
                'comments',
                'Personal comments',
                'Személyes megjegyzések',
                'textarea'
            )

        ]
    }

];


/* ==================================
   04. GENERAL FUNCTIONS
================================== */

let language = 'en';

const form = document.getElementById('journal');

const tr = obj => obj[language];

function make(tag, cls) {

    const el = document.createElement(tag);

    if (cls) {
        el.className = cls;
    }

    return el;
}

function translated(el, p) {

    el.dataset.en = p.en;
    el.dataset.hu = p.hu;

    return el;
}


/* ==================================
   05. GENERATE TASTING FORM
================================== */

for (const [i, s] of sections.entries()) {

    const section = make('section');
    section.id = s.id;

    const panel = make('div', 'panel');

    section.append(panel);

    const sectionNumber =
        String(i + 1).padStart(2, '0');

    panel.append(

        translated(
            make('p', 'eyebrow'),
            pair(
                sectionNumber + ' / TASTING RECORD',
                sectionNumber + ' / KÓSTOLÁSI NAPLÓ'
            )
        ),

        translated(
            make('h2'),
            s.title
        )

    );

    for (const f of s.fields) {

        // Selectable characteristics

        if (f.options) {

            const field = make('fieldset');

            field.append(
                translated(make('legend'), f.label)
            );

            const row = make('div', 'choices');

            f.options.forEach((o, j) => {

                const label = make('label', 'choice');
                const input = make('input');

                input.type = f.type;
                input.name = f.id;
                input.value = String(j);

                // Allow single-choice options to be deselected.

                if (f.type === 'radio') {

                    label.addEventListener('click', event => {

                        if (event.target === input) {

                            if (input.dataset.selected === 'true') {
                                event.preventDefault();

                                setTimeout(() => {
                                    input.checked = false;
                                    input.dataset.selected = 'false';
                                }, 0);

                            } else {

                                row.querySelectorAll('input')
                                    .forEach(other => {
                                        other.dataset.selected = 'false';
                                    });

                                input.dataset.selected = 'true';
                            }
                        }
                    });

                    input.addEventListener('change', () => {

                        row.querySelectorAll('input')
                            .forEach(other => {
                                other.dataset.selected =
                                    String(other.checked);
                            });
                    });
                }

                label.append(
                    input,
                    translated(make('span'), o)
                );

                row.append(label);

            });

            field.append(row);
            panel.append(field);

        } else {

            // Text fields and date

            const label = make('label');
            label.htmlFor = f.id;

            label.append(
                translated(make('span'), f.label)
            );

            const input = make(
                f.type === 'textarea' ? 'textarea' : 'input'
            );

            input.id = f.id;
            input.name = f.id;

            if (f.type === 'textarea') {
                input.rows = 5;
            } else {
                input.type = f.type;
            }

            label.append(input);
            panel.append(label);
        }

    }

    document.getElementById('sections').append(section);

}


/* ==================================
   06. LANGUAGE SWITCHING
================================== */

function setLanguage(lang) {

    language = lang;

    document.documentElement.lang = lang;

    document.title = lang === 'en'
        ? 'BOR — Wine Journal'
        : 'BOR — Bornapló';

    document.querySelectorAll('[data-en][data-hu]')
        .forEach(element => {
            element.textContent = element.dataset[lang];
        });

    document.querySelectorAll('[data-lang]')
        .forEach(button => {

            button.setAttribute(
                'aria-pressed',
                String(button.dataset.lang === lang)
            );

        });

    document.getElementById('status').textContent = '';
}

document.querySelectorAll('[data-lang]')
    .forEach(button => {

        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });

    });

// Default language

setLanguage('en');


/* ==================================
   07. AUTOMATIC DATE
================================== */

const today = new Date();

document.getElementById('date').value = [

    today.getFullYear(),

    String(today.getMonth() + 1)
        .padStart(2, '0'),

    String(today.getDate())
        .padStart(2, '0')

].join('-');


/* ==================================
   08. GENERATE PRINTABLE RECORD
================================== */

function prepareRecord() {

    const data = new FormData(form);

    const record =
        document.getElementById('printRecord');

    record.replaceChildren();

    const h = make('h1');

    const defaultTitle = language === 'en'
        ? 'Wine tasting record'
        : 'Borkóstolási napló';

    h.textContent = 'BOR — ' + (
        String(data.get('wine') || '').trim()
        || defaultTitle
    );

    record.append(h);

    for (const s of sections) {

        const group = make('div', 'print-group');

        const heading = make('h2');
        heading.textContent = tr(s.title);

        group.append(heading);

        for (const f of s.fields) {

            const values = data.getAll(f.id)
                .map(value => {

                    if (f.options) {
                        return tr(f.options[Number(value)]);
                    }

                    return String(value).trim();

                })
                .filter(Boolean);

            // Skip empty fields

            if (!values.length) {
                continue;
            }

            const p = make('p');
            const b = make('strong');

            b.textContent = tr(f.label) + ': ';

            p.append(
                b,
                document.createTextNode(values.join(', '))
            );

            group.append(p);

        }

        // Skip completely empty sections

        if (group.children.length > 1) {
            record.append(group);
        }

    }

}


/* ==================================
   09. PDF EXPORT
================================== */

form.addEventListener('submit', event => {

    event.preventDefault();

    prepareRecord();

    window.print();

});

window.addEventListener(
    'beforeprint',
    prepareRecord
);


/* ==================================
   10. EMAIL FUNCTIONALITY
   Google Apps Script — future setup
================================== */

document.getElementById('email')
    .addEventListener('click', () => {

        const input =
            document.getElementById('recipientEmail');

        const status =
            document.getElementById('status');

        if (!input.value.trim() || !input.checkValidity()) {

            status.textContent = language === 'en'

                ? 'Please enter a valid recipient email address.'

                : 'Adj meg egy érvényes e-mail-címet.';

            return;
        }

        status.textContent = language === 'en'

            ? 'Email delivery is not configured yet. Save the PDF for now.'

            : 'Az e-mail-küldés még nincs beállítva. Egyelőre mentsd a PDF-et.';

    });

    /* ==================================
   11. OTHER WINE TYPE
================================== */

const otherWineInput =
    document.getElementById('otherWineType');

const otherWineLabel =
    otherWineInput.closest('label');

function updateOtherWineType() {

    const selectedType = form.querySelector(
        'input[name="type"]:checked'
    );

    const isOther = selectedType &&
        selectedType.value === '6';

    otherWineLabel.hidden = !isOther;
    otherWineLabel.style.display =
        isOther ? 'block' : 'none';

    otherWineInput.disabled = !isOther;
}

form.addEventListener('change', updateOtherWineType);

form.querySelectorAll('input[name="type"]')
    .forEach(input => {

        input.addEventListener('click', () => {
            setTimeout(updateOtherWineType, 0);
        });

    });

updateOtherWineType();
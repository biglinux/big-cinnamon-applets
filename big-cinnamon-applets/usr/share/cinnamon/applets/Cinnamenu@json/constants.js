// l10n
const Gettext = imports.gettext;

function _(str) {
  let cinnamonTranslation = Gettext.gettext(str);
  if (cinnamonTranslation !== str) {
    return cinnamonTranslation;
  }
  return Gettext.dgettext('Cinnamenu@json', str);
}

const REMEMBER_RECENT_KEY = 'remember-recent-files';

const ApplicationType = {
  _applications: 0,
  _places: 1,
  _recent: 2,
  _windows: 3,
  _providers: 4
};
const AppTypes = Object.keys(ApplicationType);

const ApplicationsViewMode = {
  LIST: 0,
  GRID: 1
};

const fuzzyOptions = {
  before: '<b><u>',
  after: '</u></b>'
}

const gridWidths = [0, 0, 0, 625, 700, 725, 900, 1025];
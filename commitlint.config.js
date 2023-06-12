//Los prefijos siguen la convención de commit convencional 1.0.0 (https://www.conventionalcommits.org/en/v1.0.0/):
// build: Cambios que afectan al sistema de construcción o a las dependencias externas (ejemplo de ámbitos: gulp, broccoli, npm)
// ci: Cambios en los archivos y scripts de configuración de CI (ejemplo de ámbitos: Travis, Circle, BrowserStack, SauceLabs)
// docs: Cambios solo en la documentación
// feat: Una nueva característica
// fix: Una corrección de error
// perf: Un cambio de código que mejora el rendimiento
// refactor: Un cambio de código que no soluciona un error ni agrega una característica
// style: Cambios que no afectan al significado del código (espacios en blanco, formato, falta de punto y coma, etc.)
// test: Agregar pruebas faltantes o corregir pruebas existentes
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 300],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
};

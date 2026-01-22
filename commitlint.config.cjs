module.exports = {
  // Padrão Conventional Commits
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Tipos de commit permitidos
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nova funcionalidade
        'fix',      // correção de bug
        'docs',     // documentação
        'style',    // formatação (sem alterar lógica)
        'refactor', // refatoração
        'test',     // testes
        'chore',    // manutenção / config
        'perf',     // performance
        'build',    // build / dependências
        'ci',       // CI/CD
        'revert'    // reverter commit
      ],
    ],

    // Escopo opcional
    'scope-empty': [0],

    // Assunto do commit
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 72],

    // Permitir PT-BR
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],

    // Corpo e rodapé (opcional)
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [1, 'always', 100],
    'footer-leading-blank': [1, 'always'],

    // Header
    'header-max-length': [2, 'always', 100]
  },
};

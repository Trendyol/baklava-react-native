module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?:([A-Z]+-\d+)\s)?(\w+)(?:\(([\w$.\-* ]*)\))?: (.*)$/,
      headerCorrespondence: ['ticket', 'type', 'scope', 'subject'],
    },
  },
};

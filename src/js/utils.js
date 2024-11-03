export function toCommaList(...args) {
  return args
    .flat()
    .filter((str) => Boolean(str))
    .join(', ');
}

export class Fields {
  constructor(obj) {
    this.fields = Object.keys(obj);
  }

  hasAny(...args) {
    const values = args.flat();

    return values.some((value) => this.fields.includes(value));
  }

  hasAll(...args) {
    const values = args.flat();

    return values.every((value) => this.fields.includes(value));
  }
}

export function getLines(text = '') {
  return text.match(/.+/gm) ?? [];
}

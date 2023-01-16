// dynamice form architect

type FormItemType = 'text' | 'textarea' | 'select' | 'date';

interface FormItemConfig {
  type?: FormItemType;
  options?: string[];
  defaultOptions?: string;
  placeholder?: string;
  defaultValue?: string;
}

export class FormItem {
  id: string;
  type: FormItemType;
  options?: string[];
  placeholder?: string;

  constructor({ type = 'text', options, placeholder }: FormItemConfig = {}) {
    this.id = '1';
    this.type = type;
    this.options = options;
    this.placeholder = placeholder;
  }

  map(fn: (item: FormItem) => FormItem) {
    return FormItem.of(fn(this));
  }

  static of(config: FormItemConfig) {
    return new FormItem(config);
  }
}

// form 정리

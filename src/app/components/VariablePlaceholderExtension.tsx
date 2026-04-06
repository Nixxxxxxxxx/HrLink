import { Node, mergeAttributes } from '@tiptap/react';
import { NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import React from 'react';

// Available template variables
export const TEMPLATE_VARIABLES = [
  { key: 'username', label: 'Имя', example: 'Алексей' },
  { key: 'lastName', label: 'Фамилия', example: 'Иванов' },
  { key: 'fullName', label: 'ФИО', example: 'Иванов Алексей Сергеевич' },
  { key: 'position', label: 'Должность', example: 'Ведущий инженер' },
  { key: 'department', label: 'Подразделение', example: 'Дирекция по производству' },
  { key: 'hireDate', label: 'Дата приёма', example: '15 марта 2019' },
  { key: 'anniversary', label: 'Стаж (лет)', example: '7' },
  { key: 'birthday', label: 'День рождения', example: '23 июня' },
  { key: 'managerName', label: 'Руководитель', example: 'Петрова Мария' },
] as const;

export type VariableKey = typeof TEMPLATE_VARIABLES[number]['key'];

// React component for rendering variable pill inline
const VariablePillView = ({ node }: { node: any }) => {
  const varKey = node.attrs.variableKey as string;
  const varDef = TEMPLATE_VARIABLES.find(v => v.key === varKey);
  const label = varDef?.label || varKey;

  return (
    <NodeViewWrapper as="span" className="inline">
      <span
        contentEditable={false}
        className="inline-flex items-center gap-[3px] px-[6px] py-[1px] mx-[1px] rounded-[4px] bg-[#F0E6FF] text-[#7F2BFD] text-[13px] leading-[20px] tracking-[0.16px] font-medium font-['IBM_Plex_Sans',sans-serif] select-none align-baseline cursor-default whitespace-nowrap"
        title={`Переменная: {${varKey}} → например «${varDef?.example || '...'}»`}
      >
        <svg className="size-[10px] shrink-0 opacity-70" viewBox="0 0 16 16" fill="none">
          <path d="M4.5 2C3.12 2 2 3.34 2 5v1.5h1.5V5c0-.83.45-1.5 1-1.5s1 .67 1 1.5v.76c0 1.08-.36 2.13-1.02 2.99L4 9l.48.75c.66.86 1.02 1.91 1.02 2.99V13.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5V12H2v1.5C2 14.66 3.12 16 4.5 16S7 14.66 7 13.5v-.76c0-.73.19-1.45.55-2.08L8 9.88l-.45-.78A5.01 5.01 0 017 7.02V5C7 3.34 5.88 2 4.5 2zM11.5 2C10.12 2 9 3.34 9 5v2.02c0 .73-.19 1.45-.55 2.08L8 9.88l.45.78c.36.63.55 1.35.55 2.08v.76C9 14.66 10.12 16 11.5 16S14 14.66 14 13.5V12h-1.5v1.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5v-.76c0-1.08.36-2.13 1.02-2.99L12 9l-.48-.75A5.01 5.01 0 0110.5 5.26V5c0-.83.45-1.5 1-1.5s1 .67 1 1.5v1.5H14V5c0-1.66-1.12-3-2.5-3z" fill="#7F2BFD"/>
        </svg>
        {label}
      </span>
    </NodeViewWrapper>
  );
};

export const VariablePlaceholder = Node.create({
  name: 'variablePlaceholder',
  group: 'inline',
  inline: true,
  atom: true,
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      variableKey: {
        default: 'username',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-variable]',
        getAttrs: (dom) => ({
          variableKey: (dom as HTMLElement).getAttribute('data-variable'),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes({ 'data-variable': HTMLAttributes.variableKey }, HTMLAttributes), `{${HTMLAttributes.variableKey}}`];
  },

  addNodeView() {
    return ReactNodeViewRenderer(VariablePillView);
  },
});
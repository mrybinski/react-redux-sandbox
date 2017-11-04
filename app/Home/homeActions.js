export const CHANGE_LABEL = 'CHANGE_LABEL';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export function changeLabel(label) {
    return { type: CHANGE_LABEL, label };
}

import syntaxes from './syntaxes';
import Syntax from './Syntax';

const orderingRules: string[] = Object.entries(syntaxes)
    .filter((syntax: [string, Syntax]): boolean => !!syntax[1].orderingRule)
    .map((syntax: [string, Syntax]): string => syntax[1].orderingRule as string);

export default orderingRules;
import syntaxes from './syntaxes';
import Syntax from './Syntax';

const matchingRules: string[] = Object.entries(syntaxes)
    .filter((syntax: [string, Syntax]): boolean => !!syntax[1].matchingRule)
    .map((syntax: [string, Syntax]): string => syntax[1].matchingRule as string);

export default matchingRules;

import syntaxes from './syntaxes';
import Syntax from './Syntax';

const substringRules: string[] = Object.entries(syntaxes)
    .filter((syntax: [string, Syntax]): boolean => !!syntax[1].substringsRule)
    .map((syntax: [string, Syntax]): string => syntax[1].substringsRule as string);

export default substringRules;

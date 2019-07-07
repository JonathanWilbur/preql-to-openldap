export default
function commentOut(uncommentedText: string): string {
    return ('# ' + uncommentedText.replace(/\r?\n/g, '\r\n# '));
};

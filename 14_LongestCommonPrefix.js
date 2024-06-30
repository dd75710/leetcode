/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return ""; // 空の配列の場合は空文字列を返す

    const ref = strs[0];
    let prefix = "";

    for (let i = 0; i < ref.length; i++) {
        const char = ref[i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                // 共通の文字が見つからない場合、それまでの文字列を返す
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
//chat GPTにヒントもらったたからもう一回やろうね。
//2024/04/26

export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const MaxLength100 = (value) => {
    if (value && value.length <= 100) return undefined;
    return "Max length is 100 symols";
}

export const MaxLengthCreator = (number) => {
    const MaxLength = (value) => {
        if ((value && value.length <= number) || !value) return undefined;
        return `Max length is ${number} symbols`;
    } 
    return MaxLength;
}
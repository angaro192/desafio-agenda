export default {
    mounted(htmlInput: HTMLInputElement, binding: { value: string }) {
        const zipCodeMask = (value: string) => {
            const onlyNumberValue = value.replace(/\D/g, "").slice(0, 8);
            return onlyNumberValue.length > 5 ? `${onlyNumberValue.slice(0, 5)}-${onlyNumberValue.slice(5)}` : onlyNumberValue;
        };
        htmlInput.addEventListener("input", (event: Event) => {
            const input = event.target as HTMLInputElement;
            input.value = zipCodeMask(input.value);
        });
    }
};
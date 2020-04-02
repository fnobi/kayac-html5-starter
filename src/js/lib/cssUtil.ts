const appendPostfix = (nums: number[], postfix: string) => {
  return nums.map<string>(n => `${n}${postfix}`).join(" ");
};

export const px = (...nums: number[]) => {
  return appendPostfix(nums, "px");
};

export const percent = (...nums: number[]) => {
  return appendPostfix(nums, "%");
};

export const em = (...nums: number[]) => {
  return appendPostfix(nums, "em");
};

/**
 * text-shadowを使って、アウトライン的なものをつくる
 */
export function makeOutlineShadow(props: {
  rad: number;
  color: string;
  count?: number;
  grow?: number;
}) {
  const { rad, color, count = 8, grow = 0 } = props;
  return new Array(count)
    .fill(0)
    .map((zero, i) => {
      const angle = (Math.PI * 2 * i) / count;
      const [x, y] = [Math.cos(angle), Math.sin(angle)].map(n => n * rad);
      return `${em(x, y, grow)} ${color}`;
    })
    .join(",");
}

import type { Tariff } from "./Body";

type TariffCardProps = {
  tariff: Tariff;
  isSelected: boolean;
  discountPercent: number;
  onClick: () => void;
  compact?: boolean;
  widthClassName?: string;
  hideDiscounts?: boolean;
};

function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export default function TariffCard({
  tariff,
  isSelected,
  discountPercent,
  onClick,
  compact = false,
  widthClassName,
  hideDiscounts = false,
}: TariffCardProps) {
  const defaultWidthClass = compact ? "w-[240px] max-[1217px]:w-[748px]" : "w-[748px]";
  const mainPrice = hideDiscounts ? tariff.full_price : tariff.price;

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`relative cursor-pointer select-none max-[344px]:gap-[15px] rounded-[34px] border-2 bg-[#313637] ${isSelected ? "border-[#FDB056]" : "border-[#484D4E]"} ${
        compact
          ? `flex flex-col items-center justify-center gap-10 pt-[70px] pb-[23px] max-[1217px]:flex-row max-[1217px]:items-center max-[1217px]:justify-center max-[1217px]:pt-[34px] max-[1217px]:pb-[30px] ${widthClassName ?? defaultWidthClass}`
          : `flex items-center justify-center gap-10 pt-[34px] pb-[30px] ${widthClassName ?? defaultWidthClass}`
      }`}
      onClick={onClick}
    >
      <div
        className={`absolute top-0 left-[50px] flex h-[39px] w-[64px] items-center justify-center rounded-b-[13px] bg-[#FD5656] transition-all duration-500 max-[1217px]:left-[233px] max-[1217px]:h-[27px] max-[1217px]:w-[48px] max-[1217px]:rounded-b-[8px] max-[344px]:left-[190px] max-[344px]:rounded-b-[6px] ${hideDiscounts ? "pointer-events-none -translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <span className="font-['Gilroy'] text-[22px] max-[1217px]:text-[16px] max-[344px]:text-[13px] leading-[120%] font-medium text-white">-{discountPercent}%</span>
      </div>
      {tariff.is_best && (
        <div className="absolute top-2.5 right-[20px] max-[1217px]:right-[14px]  flex h-[29px] w-[60px] max-[1217px]:w-[34px] max-[1217px]:h-[21px] max-[344px]:w-[28px] max-[344px]:h-[17px] items-center justify-center">
          <span className="text-[#FDB056] text-[22px] max-[1217px]:text-[16px] max-[344px]:text-[13px]">хит!</span>
        </div>
      )}
      <div className="flex flex-col items-center max-[1217px]:items-start gap-[16px]">
        <span className="text-[26px] leading-[120%] font-medium text-white max-[1217px]:text-[18px] max-[344px]:text-[16px]">{tariff.period}</span>
        <div className="flex flex-col items-end">
          <span className={`font-["Montserrat"] ${isSelected ? "text-[50px] max-[1217px]:text-[34px] max-[344px]:text-[30px] max-[344px]:text-nowrap font-semibold text-[#FDB056]" : "text-[50px] max-[1217px]:text-[34px] max-[344px]:text-[30px] font-semibold text-white"}`}>
            {formatPrice(mainPrice)}
          </span>
          <span
            className={`font-['Montserrat'] text-[24px] max-[1217px]:text-[16px] max-[344px]:text-[14px] font-normal text-[#919191] line-through transition-all duration-500 ${hideDiscounts ? "opacity-0" : "opacity-100"}`}
          >
            {formatPrice(tariff.full_price)}
          </span>
        </div>
      </div>
      <div className={compact ? "w-[204px] max-[1217px]:w-[120px]" : "w-[328px] max-[1217px]:w-[120px]"}>
        <span className="block font-['Montserrat'] text-[16px] max-[1217px]:text-[14px] leading-[130%] font-normal text-white">{tariff.text}</span>
      </div>
    </button>
  );
}

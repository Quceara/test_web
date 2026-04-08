"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TariffCard from "./TariffCard";

export type Tariff = {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
};

function getDiscountPercent(price: number, fullPrice: number) {
  if (fullPrice <= 0 || price >= fullPrice) {
    return 0;
  }

  return Math.round(((fullPrice - price) / fullPrice) * 100);
}

const periodOrder: Record<string, number> = {
  "Навсегда": 0,
  "3 месяца": 1,
  "1 месяц": 2,
  "1 неделя": 3,
};

type BodyProps = {
  timerExpired: boolean;
};

type TariffSkeletonProps = {
  compact?: boolean;
  widthClassName?: string;
};

function TariffSkeleton({ compact = false, widthClassName }: TariffSkeletonProps) {
  const defaultWidthClass = compact ? "w-[240px] max-[1217px]:w-[343px] max-[344px]:w-[288px]" : "max-[1217px]:w-[343px] max-[344px]:w-[288px]";

  return (
    <div
      className={`relative overflow-hidden rounded-[34px] border-2 border-[#484D4E] bg-[#313637] ${compact ? "flex flex-col items-center justify-center gap-10 pt-[70px] pb-[23px] max-[1217px]:flex-row max-[1217px]:pt-[34px] max-[1217px]:pb-[30px]" : "flex items-center justify-center gap-10 pt-[34px] pb-[30px]"} ${widthClassName ?? defaultWidthClass}`}
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#3B4041] via-[#4A5052] to-[#3B4041]" />
      <div className="relative z-10 h-[40px] w-[140px] rounded-[10px] bg-[#2A2F30]" />
      <div className="relative z-10 h-[64px] w-[170px] rounded-[12px] bg-[#2A2F30]" />
      <div className={`relative z-10 rounded-[12px] bg-[#2A2F30] ${compact ? "h-[56px] w-[120px]" : "h-[56px] w-[220px]"}`} />
    </div>
  );
}

export default function Body({ timerExpired }: BodyProps) {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [selectedTariffIndex, setSelectedTariffIndex] = useState<number | null>(null);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [showAgreementError, setShowAgreementError] = useState(false);
  const [isBuyButtonBlinking, setIsBuyButtonBlinking] = useState(false);
  const hasTariffs = tariffs.length > 0;
  const firstTariff = tariffs[0];
  const lastThreeTariffs = tariffs.slice(1, 4);

  useEffect(() => {
    let isMounted = true;

    async function loadTariffs() {
      try {
        const response = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs");
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as Tariff[];
        if (!Array.isArray(data) || !isMounted) {
          return;
        }

        const sortedTariffs = [...data].sort((a, b) => {
          const orderA = periodOrder[a.period] ?? Number.MAX_SAFE_INTEGER;
          const orderB = periodOrder[b.period] ?? Number.MAX_SAFE_INTEGER;
          return orderA - orderB;
        });

        setTariffs(sortedTariffs);
        setSelectedTariffIndex(sortedTariffs.length > 0 ? 0 : null);
      } catch {
        setTariffs([]);
      }
    }

    loadTariffs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="flex w-full flex-col items-center ">
      <div className="flex w-full flex-col items-center bg-[#232829] pb-[150px] pt-[103px] max-[1217px]:pb-[30px]">
        <div className="mt-[50px] max-[1217px]:mt-0 flex w-[1216px] flex-col gap-[66px] max-[1217px]:gap-[20px] max-[1217px]:w-[343px] max-[344px]:w-[288px]">
          <h1 className="mb-[45px] max-[1217px]:mb-0 text-[40px] leading-[110%] tracking-[0.01em] font-bold text-white max-[1217px]:text-[24px] max-[344px]:text-[22px]">
            Выбери подходящий для себя <span className="text-[#FFBB00]">тариф</span>
          </h1>
          <div className="flex  items-center justify-between max-[1217px]:flex-col ">
            <img className="h-[767px] w-[381px] max-[1217px]:h-[250px] max-[1217px]:w-[124px] max-[344px]:h-[200px] max-[344px]:w-[99px]" src="/image/img.png" alt="накачанный мужик" />
            <div className="flex flex-col gap-[14px] max-[344px]:w-[288px]">
              {hasTariffs && firstTariff ? (() => {
                const isSelected = selectedTariffIndex === 0; 
                const discountPercent = getDiscountPercent(firstTariff.price, firstTariff.full_price);

                return (
                  <TariffCard
                    key={`${firstTariff.id}-0`}
                    tariff={firstTariff}
                    isSelected={isSelected}
                    discountPercent={discountPercent}
                    hideDiscounts={timerExpired}
                    onClick={() => setSelectedTariffIndex(0)}
                    widthClassName="max-[1217px]:w-[343px] max-[344px]:w-[288px]"
                  />
                );
              })() : (
                <TariffSkeleton widthClassName="w-[748px] max-[1217px]:w-[343px] max-[344px]:w-[288px]" />
              )}
              <div className="flex gap-[14px] max-[1217px]:flex-col max-[344px]:w-[288px]">
                {hasTariffs ? lastThreeTariffs.map((tariff, index) => {
                  const actualIndex = index + 1;
                  const isSelected = selectedTariffIndex === actualIndex;
                  const discountPercent = getDiscountPercent(tariff.price, tariff.full_price);

                  return (
                    <TariffCard
                      key={`${tariff.id}-${actualIndex}`}
                      tariff={tariff}
                      isSelected={isSelected}
                      discountPercent={discountPercent}
                      hideDiscounts={timerExpired}
                      onClick={() => setSelectedTariffIndex(actualIndex)}
                      compact
                      widthClassName="w-[240px] max-[1217px]:w-[343px] max-[344px]:w-[288px]"
                    />
                  );
                }) : (
                  <>
                    <TariffSkeleton compact widthClassName="w-[240px] max-[1217px]:w-[343px] max-[344px]:w-[288px]" />
                    <TariffSkeleton compact widthClassName="w-[240px] max-[1217px]:w-[343px] max-[344px]:w-[288px]" />
                    <TariffSkeleton compact widthClassName="w-[240px] max-[1217px]:w-[343px] max-[344px]:w-[288px]" />
                  </>
                )}
              </div>
              <div className="flex rounded-[20px] items-start justify-center gap-2 py-[18px] w-[499px] 
              max-[1217px]:w-[343px] 
              max-[344px]:w-[288px]  bg-[#313637] mt-[6px]">
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8775 16.6437C10.8869 17.2578 11.3885 17.75 12.0025 17.75C12.6166 17.75 13.1181 17.2531 13.1275 16.6437L13.5025 6.5375C13.526 6.15313 13.3853 5.77813 13.1135 5.4875C12.8228 5.17813 12.4197 5 12.0025 5C11.5853 5 11.1822 5.17813 10.8916 5.4875C10.6197 5.77813 10.4791 6.15313 10.5025 6.5375L10.8775 16.6437Z" fill="#FDB056"/>
                  <path d="M12 23C12.8284 23 13.5 22.3284 13.5 21.5C13.5 20.6716 12.8284 20 12 20C11.1716 20 10.5 20.6716 10.5 21.5C10.5 22.3284 11.1716 23 12 23Z" fill="#FDB056"/>
                </svg>
                <div className="w-[427px] max-[1217px]:w-[267px] max-[344px]:w-[218px] ">
                  <span className="block font-['Montserrat'] text-[16px] max-[1217px]:text-[12px] leading-[130%] font-normal text-white">
                    Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 w-[649px] max-[1217px]:w-[339px] max-[1217px]:w-[292px] mt-[16px]">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAgreementChecked}
                    onChange={(event) => {
                      setIsAgreementChecked(event.target.checked);
                      setShowAgreementError(false);
                    }}
                    className="sr-only"
                  />
                  <span
                    className={`flex size-[32px] max-[1217px]:size-[30px] items-center justify-center rounded-[3px] border-[1.5px] ${showAgreementError ? "border-[#FD5656]" : "border-[#919191]"}`}
                    aria-hidden="true"
                  >
                    {isAgreementChecked && (
                      <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4727 0.570312C19.5464 0.491786 19.6674 0.477847 19.7568 0.533203L19.793 0.561523C19.8834 0.647109 19.8879 0.791255 19.8018 0.882812L7.43848 13.9736C7.39461 14.02 7.33545 14.0458 7.27344 14.0459H7.27148C7.22257 14.0452 7.1766 14.0286 7.13867 14.001L7.10352 13.9697L0.558594 6.69727C0.474798 6.60415 0.482343 6.46058 0.575195 6.37695C0.667705 6.29371 0.811212 6.29874 0.898438 6.39453L6.91406 13.0791L7.27734 13.4824L7.64941 13.0879L19.4717 0.571289L19.4727 0.570312Z" fill="#424748" stroke="#FDB056"/>
                      </svg>
                    )}
                  </span>
                </label>
                <span className="font-['Montserrat'] text-[16px] max-[1217px]:text-[12px]  max-[1217px]:w-[297px] max-[344px]:w-[252px] leading-[110%] font-normal text-[#CDCDCD]">
                  Я согласен <Link className="underline" href="/policy">
                    с офертой рекуррентных платежей и Политикой конфиденциальности 
                    </Link>
                </span>
              </div>
              <button
                type="button"
                className={`mt-[2px] flex h-[66px] w-[352px] cursor-pointer items-center justify-center gap-2 rounded-[20px] bg-[#FDB056] max-[1217px]:h-[63px] max-[1217px]:w-[343px] max-[344px]:h-[55px] max-[344px]:w-[288px] ${isBuyButtonBlinking ? "animate-pulse" : ""}`}
                onClick={() => {
                  if (!isAgreementChecked) {
                    setShowAgreementError(true);
                    return;
                  }

                  setIsBuyButtonBlinking(true);
                  setTimeout(() => setIsBuyButtonBlinking(false), 900);
                }}
              >
                <span className="font-['Montserrat'] text-[20px] max-[1217px]:text-[18px] leading-[130%] font-bold text-[#191E1F]">
                  Купить
                </span>
              </button>
              <div className="w-[748px] max-[1217px]:w-[343px] max-[344px]:w-[288px]">
                  <span className=" block font-['Montserrat'] text-[14px] max-[1217px]:text-[10px] leading-[120%] max-[1217px]:leading-[110%] font-normal text-[#9B9B9B]">
                    Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
                  </span>
              </div>
            </div>
          </div>
          <div className="w-[1216px] max-[1217px]:w-[343px] max-[344px]:w-[288px] p-[20px] rounded-[20px] border-[1px] border-[#484D4E] flex flex-col gap-[30px] items-start">
            <div className="rounded-[30px] px-[30px] max-[1217px]:px-[20px] py-[17px] border-[1px] border-[#81FE95]">
              <span className="text-[#81FE95] text-[28px] max-[1217px]:text-[18px] max-[344px]:text-[14px] leading-[120%] font-medium">гарантия возврата 30 дней</span>
            </div>
            <span className="block font-['Montserrat'] text-[24px] max-[1217px]:text-[14px] max-[344px]:text-[13px] leading-[130%] font-normal text-[#DCDCDC]">
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

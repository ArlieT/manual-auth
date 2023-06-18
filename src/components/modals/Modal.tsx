"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsFillKeyFill } from "react-icons/bs";

import { signIn, useSession } from "next-auth/react";
import Button from "../Button";
import Signin from "@/app/(auth)/auth/signin/page";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: string;
  footer?: string;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

export default function Modal({
  actionLabel,
  onClose,
  onSubmit,
  body,
  disabled,
  footer,
  isOpen,
  secondaryLabel,
  secondaryAction,
  title
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 3000);
  }, [disabled, onClose]);

  const handlesubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  /* input */
  const countrySelect = document.getElementById(
    "country-select"
  ) as HTMLInputElement;
  const phoneInput = document.getElementById("phone-input") as HTMLInputElement;

  phoneInput?.addEventListener("focus", () => {
    phoneInput.value = countrySelect?.value + " ";
  });

  const { data: session, status } = useSession();

  useEffect(() => {
    console.log({ status });

    setShowModal(status == "authenticated" ? false : true);
  }, [status]);

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const signInwithCredentials = () => {
    signIn();
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
      bg-neutral-800/70
    "
          >
            <div
              className="
      relative 
      w-full
      md:w-4/6
      lg:w-3/6
      xl:w-2/5
      my-6
      mx-auto 
      h-full 
      lg:h-auto
      md:h-auto
      "
            >
              {/*container*/}
              <div
                className={`
        translate
        duration-300
        h-full
        ${showModal ? "translate-y-0" : "translate-y-full"}
        ${showModal ? "opacity-100" : "opacity-0"}
      `}
              >
                <div
                  className="translate h-full
          lg:h-auto
          md:h-auto
          border-0 
          rounded-lg 
          shadow-lg 
          relative 
          flex 
          flex-col 
          w-full 
          bg-white 
          outline-none 
          focus:outline-none
        "
                >
                  {/*header*/}
                  <div
                    className="
            flex 
            items-center 
            p-6
            rounded-t
            justify-center
            relative
            border-b-[1px]
            "
                  >
                    <button
                      className="
                p-1
                border-0 
                hover:opacity-70
                transition
                absolute
                left-9
              "
                      onClick={handleClose}
                    >
                      <IoMdClose size={18} />
                    </button>
                    <div className="text-lg font-semibold">{title}</div>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 space-y-2 flex-auto">
                    <span className="font-bold text-lg"> {body}</span>
                    <Button
                      outline={true}
                      label="Continue with credentials"
                      onClick={signInwithCredentials}
                      icon={
                        <BsFillKeyFill
                          size={28}
                         
                        />
                      }
                    />
                    <Button
                      outline={true}
                      label="Continue with Google"
                      icon={<FcGoogle size={28} />}
                      onClick={handleSignIn}
                    />
                  </div>
                  <div className="flex  items-center gap-2">
                    <hr className="w-full" /> or <hr className="w-full" />
                  </div>
                  {/*footer*/}
                  <div className="flex flex-col gap-2 p-6">
                    <div className="flex flex-col divide-y p-2 rounded-md border border-black/30">
                      <select
                        id="country-select"
                        className="px-3 py-2 focus:outline-none"
                      >
                        <option className="p-2" value="">
                          Select Country
                        </option>
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+81">Japan (+81)</option>
                        <option value="+86">China (+86)</option>
                        <option value="+91">India (+91)</option>
                        <option value="+7">Russia (+7)</option>
                        <option value="+55">Brazil (+55)</option>
                        <option value="+52">Mexico (+52)</option>
                        <option value="+39">Italy (+39)</option>
                        <option value="+34">Spain (+34)</option>
                        <option value="+1">Canada (+1)</option>
                        <option value="+82">South Korea (+82)</option>
                        <option value="+90">Turkey (+90)</option>
                        <option value="+54">Argentina (+54)</option>
                        <option value="+46">Sweden (+46)</option>
                        <option value="+91">Pakistan (+92)</option>
                      </select>
                      <input
                        id="phone-input"
                        type="tel"
                        className="py-2 px-3 focus:outline-none h-full"
                        placeholder="Phone number"
                      />
                    </div>
                    <div
                      className="flex flex-row items-center gap-4 w-full
              "
                    >
                      {/* {secondaryAction && secondaryLabel && (
                  <Button
                    disabled={disabled}
                    label={secondaryLabel}
                    onClick={signIn}
                    outline
                  />
                )} */}
                      <Button
                        disabled={disabled}
                        label={actionLabel}
                        onClick={handleSubmit}
                      />
                    </div>

                    {footer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

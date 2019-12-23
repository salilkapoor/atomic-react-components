// @flow

export type cookieDisclaimerProps = {
  children: Node,
  showDisclaimer?: boolean,
  acceptBtn: {
    type: Object,
    text?: string,
  },
  rejectBtn: {
    rbType: Object,
    rbText?: string,
  },
  marginBtnCls: string,
  contentWRTCTAButtons?: string,
  onClick: Function,
};
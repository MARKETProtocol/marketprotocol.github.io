exports.ids = [13];
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 22px;\n  text-align: center;\n  color: white;\n'], ['\n  font-size: 22px;\n  text-align: center;\n  color: white;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 15px;\n'], ['\n  height: 15px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: 500;\n'], ['\n  font-weight: 500;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-style: Italic;\n'], ['\n  font-style: Italic;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Styles = __webpack_require__(23);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// prettier-ignore
var SubHeader = _styledComponents2.default.section(_templateObject);
// prettier-ignore
var Spacer = _styledComponents2.default.div(_templateObject2);
// prettier-ignore
var BoldText = _styledComponents2.default.span(_templateObject3);
// prettier-ignore
var Italics = _styledComponents2.default.span(_templateObject4);
// prettier-ignore

var Privacy = function (_React$Component) {
  _inherits(Privacy, _React$Component);

  function Privacy() {
    _classCallCheck(this, Privacy);

    return _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).apply(this, arguments));
  }

  _createClass(Privacy, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Styles.SectionWrapper,
          { style: {
              background: '#181E26',
              minHeight: '300px'
            } },
          _react2.default.createElement(
            _Styles.SectionHeader,
            { color: '#fff' },
            'Privacy Policy'
          ),
          _react2.default.createElement(
            SubHeader,
            null,
            'Last modified: 3/25/2019'
          )
        ),
        _react2.default.createElement(
          _Styles.SectionWrapper,
          { id: 'market' },
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Introduction'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'MARKET Protocol LLC, a Delaware company (\u201CCompany\u201D or \u201CWe\u201D) respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website',
            _react2.default.createElement(
              'a',
              { href: 'https://marketprotocol.io/', target: '_blank' },
              ' https://marketprotocol.io/ '
            ),
            '(our \u201CWebsite\u201D) and our practices for collecting, using, maintaining, protecting, and disclosing that information. Capitalized terms not otherwise defined herein shall have the meaning given such terms in our Terms of Use available ',
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/terms', target: '_blank' },
              ' here'
            ),
            '.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'This policy applies to information we collect:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'On this Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'In email, text, and other electronic messages between you and this Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Through mobile and desktop applications you download from this Website, which provide dedicated non-browser-based interaction between you and this Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Through your use of the Services available on the Website.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'It does not apply to information collected by'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'us offline or through any other means, including on any other website operated by Company or any third party; or'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'any third party, including through any application or content (including advertising) that may link to or be accessible from or on the Website.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time. Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Children Under the Age of 18'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'Our Website is not intended for children under 18 years of age. No one under age 18 may provide any information to the Website. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Website or on or through any of its features, register on the Website, make any purchases through the Website, use any of the interactive or public comment features of this Website or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us at',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@marketprotocol.io' },
              'support@marketprotocol.io'
            )
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Information We Collect About You and How We Collect It'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We collect several types of information from and about users of our Website, including information:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or information and documentation that the AML/KYC Vendor request to enable it to verify the applicant\u2019s identity, criminal background, and other criteria it may request with respect to transactions marked as suspicious by the automated risk prevention system (\u201C',
            _react2.default.createElement(
              BoldText,
              null,
              'personal information'
            ),
            '\u201D);'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'that is about you but individually does not identify you, such as a cryptographic asset that exists on a blockchain, including without limitation ERC-20 Tokens, Ether, MKT Tokens and Position Tokens; and/or'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'about your internet connection, the equipment you use to access our Website and usage details.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You are free to choose whether to provide us with the information described above, but we may not be able to offer you all of our Services if you choose not to share certain information with us.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We collect this information:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Directly from you when you provide it to us.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'From third parties, for example, our business partners.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            _react2.default.createElement(
              Italics,
              null,
              'Information You Provide to Us '
            )
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The information we collect on or through our Website may include:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Services or requesting further Services. We may also ask you for information when you report a problem with our Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Records and copies of your correspondence (including email addresses), if you contact us'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Your responses to surveys that we might ask you to complete for research purposes.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Details of transactions you carry out through our Website and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Your search queries on the Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Information and documentation that the AML/KYC Vendor requests to enable it to verify the applicant\u2019s identity, criminal background, country of origin, and other criteria it may request with respect to transactions marked as suspicious by the automated risk prevention system.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You also may provide information to be published or displayed (hereinafter, ',
            _react2.default.createElement(
              BoldText,
              null,
              '\u201Cposted\u201D'
            ),
            ') on public areas of the Website, or transmitted to other users of the Website or third parties (collectively, ',
            _react2.default.createElement(
              BoldText,
              null,
              '\u201CUser Contributions\u201D'
            ),
            '). Your User Contributions are posted on and transmitted to others at your own risk. Although we limit access to certain pages, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Website with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            _react2.default.createElement(
              Italics,
              null,
              'Information We Collect Through Automatic Data Collection Technologies'
            )
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Information about your computer and internet connection, including your IP address, operating system, and browser type.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The information we collect automatically may include personal information, and we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Estimate our audience size and usage patterns'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Store information about your preferences, allowing us to customize our Website according to your individual interests.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Recognize you when you return to our Website.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The technologies we use for this automatic data collection may include:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            _react2.default.createElement(
              BoldText,
              null,
              'Cookies (or browser cookies):'
            ),
            'A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            _react2.default.createElement(
              BoldText,
              null,
              'Flash Cookies'
            ),
            ': Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see Choices About How We Use and Disclose Your Information.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            _react2.default.createElement(
              BoldText,
              null,
              'Web Beacons'
            ),
            ': Pages of our the Website and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity)'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            ' How We Use Your Information'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We use information that we collect about you or that you provide to us, including any personal information:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To present our Website and its contents to you.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To provide you with information, products, or services that you request from us.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To fulfill any other purpose for which you provide it.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To provide you with notices about your account, including expiration and renewal notices.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To notify you about changes to our Website or any products or services we offer or provide though it.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To allow you to participate in interactive features on our Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'In any other way we may describe when you provide the information.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'For any other purpose with your consent.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Legal Basis for Processing'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We use personal information for the legitimate interests identified above, to provide the Services we make available on our Website, and as required by law. In the event that we identify a new purpose outside of the stated purposes listed above, we will update this policy and provide any other notification required by law.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Disclosure of Your Information'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To our subsidiaries and affiliates.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To contractors, service providers, and other third parties we use to support our business.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of MARKET Protocol LLC assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by MARKET Protocol LLC about our Website users is among the assets transferred.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To fulfill the purpose for which you provide it. For example, in fulfilling a Trade or the Minting of a Position Token.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'For any other purpose disclosed by us when you provide the information.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'With your consent.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We may also disclose your personal information:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To comply with any court order, law, or legal process, including to respond to any government or regulatory request.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To enforce or apply our Terms of Use and other agreements, including for billing and collection purposes.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Choices About How We Use and Disclose Your Information/SecondaryHeader>'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            _react2.default.createElement(
              BoldText,
              null,
              'Tracking Technologies and Advertising: '
            ),
            'You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe\'s website. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            _react2.default.createElement(
              BoldText,
              null,
              'Promotional Offers from the Company: '
            ),
            'If you do not wish to have your email address/contact information used by the Company to promote our own or third parties\' products or services, you can opt-out by clicking the unsubscribe link in the footer of any email you receive from us or by sending us an email stating your request to ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@marketprotocol.io' },
              ' support@marketprotocol.io'
            ),
            '. If we have sent you a promotional email, you may send us a return email asking to be omitted from future email distributions. This opt out does not apply to information provided to the Company as a result of a product purchase, warranty registration, product service experience or other transactions.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Accessing and Correcting Your Information'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You may send us an email at ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@marketprotocol.io' },
              'support@marketprotocol.io'
            ),
            ' to request access to, correct or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Data Security'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Any payment transactions will be encrypted.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website. '
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Retention of Data'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We will keep your information as reasonably necessary to fulfill the purposes for which information is collected as stated herein; for as long as is necessary for the performance of the contract between you and us, if any; and to comply with legal and statutory obligations, such as in tax, trade and corporate laws. Once this period has expired, we will delete your data by destroying, deleting or erasing that information or converting it into an anonymous form.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'EU Privacy Rights'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'Subject to certain exceptions and limitations, data subjects in the European Union have the following rights:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to access: You have the right to request from us copies of your personal data. We may charge you a small fee for this service.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to rectification: You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to erasure: You have the right to request that we erase your personal data, under certain conditions.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to object to processing: You have the right to object to how we process your personal data, under certain conditions.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'The right to lodge a complaint with a supervisory authority. You have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State of your residence, or the location where the issue that is the subject of the complaint occurred.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@marketprotocol.io' },
              ' support@marketprotocol.io'
            )
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Changes to Our Privacy Policy'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'It is our policy to post any changes we make to our privacy policy on this page with a notice that the privacy policy has been updated on the Website home page. If we make material changes to how we treat our users\' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Contact Information'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'To ask questions or comment about this privacy policy and our privacy practices, contact us at: ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@marketprotocol.io' },
              'support@marketprotocol.io'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Privacy;
}(_react2.default.Component);

exports.default = Privacy;

/***/ })

};;
//# sourceMappingURL=Privacy.e13c935c.js.map
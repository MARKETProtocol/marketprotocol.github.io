exports.ids = [12];
exports.modules = {

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 22px;\n  text-align: center;\n  color: white;\n'], ['\n  font-size: 22px;\n  text-align: center;\n  color: white;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 15px;\n'], ['\n  height: 15px;\n']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // prettier-ignore


// prettier-ignore
var SubHeader = _styledComponents2.default.section(_templateObject);
// prettier-ignore
var Spacer = _styledComponents2.default.div(_templateObject2);
// prettier-ignore

var Terms = function (_React$Component) {
  _inherits(Terms, _React$Component);

  function Terms() {
    _classCallCheck(this, Terms);

    return _possibleConstructorReturn(this, (Terms.__proto__ || Object.getPrototypeOf(Terms)).apply(this, arguments));
  }

  _createClass(Terms, [{
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
            'Website Terms of Use'
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
            'Acceptance of the Terms of Use'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'These terms of use are entered into by and between You and The MARKET Protocol, LLC, a Delaware limited liability company ("Company," "we," or "us"). The following terms and conditions \u201CTerms of Use\u201D) govern your access to and use of ',
            _react2.default.createElement(
              'a',
              { href: 'https://marketprotocol.io/', target: '_blank' },
              ' https://marketprotocol.io/ '
            ),
            ', including any content, functionality, and services offered on or through ',
            _react2.default.createElement(
              'a',
              { href: 'https://marketprotocol.io/', target: '_blank' },
              ' https://marketprotocol.io/ '
            ),
            ' (the "Website"), whether as a guest or a registered user.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'Please read the Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found',
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/privacy', target: '_blank' },
              ' here'
            ),
            ', incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'This Website is offered and available to users who 18 years of age or older. By using this Website, you represent and warrant that you are of legal age to form a binding contract with the Company and meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Website.'
          ),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Changes to the Terms of Use'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Accessing the Website and Account Security'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users, including registered users.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You are responsible for both:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Making all arrangements necessary for you to have access to the Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'To access the Website or some of the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete. You agree that all information you provide to register with this Website or otherwise, including, but not limited to, through the use of any interactive features on the Website, is governed by our ',
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/privacy', target: '_blank' },
              ' Privacy Policy'
            ),
            ', and you consent to all actions we take with respect to your information consistent with our Privacy Policy.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'If you choose, or are provided with, a user name, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your user name, password, or other security information. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You also agree to ensure that you exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We have the right to disable any user name, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Intellectual Property Rights'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'You may store files that are automatically cached by your Web browser for display enhancement purposes.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You must not:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Modify copies of any materials from this site.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You must not access or use for any commercial purposes any part of the Website or any services or materials available through the Website.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Website in breach of the Terms of Use, your right to use the Website will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark, and other laws.'
          ),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Trademarks'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The Company name and the Company logo and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Prohibited Uses'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity (including, without limitation, by using email addresses or screen names associated with any of the foregoing).'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'To engage in any other conduct that restricts or inhibits anyone\'s use or enjoyment of the Website, or which, as determined by us, may harm the Company or users of the Website, or expose them to liability.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'Additionally, you agree not to:'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party\'s use of the Website, including their ability to engage in real time activities through the Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Use any manual process to monitor or copy any of the material on the Website, or for any other purpose not expressly authorized in these Terms of Use, without our prior written consent.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Use any device, software, or routine that interferes with the proper working of the Website.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website. '
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.'
          ),
          _react2.default.createElement(
            _Styles.PrivacyBulletList,
            null,
            'Otherwise attempt to interfere with the proper working of the Website.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Reliance on Information Posted'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'This Website may include content provided by third parties, including materials provided by other users, bloggers, and third-party licensors, syndicators, aggregators, and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by the Company, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of the Company. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Changes to the Website'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We may update the content on this Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Information About You and Your Visits to the Website'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'All information we collect on this Website is subject to our ',
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/privacy', target: '_blank' },
              ' Privacy Policy'
            ),
            '. By using the Website, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy. '
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Linking to the Website and Social Media Features'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part without our express written consent. '
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You agree to cooperate with us in causing any unauthorized framing or linking immediately to stop. We reserve the right to withdraw linking permission without notice.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'We may disable all or any social media features and any links at any time without notice in our discretion. '
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Links from the Website'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Disclaimer of Warranties'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. '
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Limitation on Liability'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. '
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The limitation of liability set out above does not apply to liability resulting from our gross negligence or willful misconduct.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Indemnification'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website, including, but not limited to, your User Contributions, any use of the Website\'s content, services, and products other than as expressly authorized in these Terms of Use, or your use of any information obtained from the Website.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Governing Law and Jurisdiction'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'All matters relating to the Website and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the Cayman Islands without giving effect to any choice or conflict of law provision or rule (whether of the Cayman Islands or any other jurisdiction). You agree that the Company may initiate a proceeding related to these Terms of Use or the enforcement or validity of our intellectual property rights in any court having personal jurisdiction. Save as aforesaid, the courts located in the Cayman Islands will have exclusive jurisdiction over claims against the Company arising out of or in any way connected with these Terms of Use, the Company, or the Website. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Arbitration'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'At Company\'s sole discretion, it may require You to submit any disputes arising from these Terms of Use or use of the Website, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the American Arbitration Association applying the laws of the Cayman Islands.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Limitation on Time to File Claims'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.'
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Waiver and Severability'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'No waiver by the Company of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect. '
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Entire Agreement'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'The Terms of Use, our Privacy Policy, and other terms and conditions referenced herein constitute the sole and entire agreement between you and the Company regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website. '
          ),
          _react2.default.createElement(Spacer, null),
          _react2.default.createElement(
            _Styles.SecondaryHeader,
            { color: '#000' },
            'Your Comments and Concerns'
          ),
          _react2.default.createElement(
            _Styles.ContentWrapper,
            null,
            'All other feedback, comments, requests for technical support, and other communications relating to the Website should be directed to: ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@marketprotocol.io' },
              'support@marketprotocol.io'
            ),
            '.'
          ),
          _react2.default.createElement(Spacer, null)
        )
      );
    }
  }]);

  return Terms;
}(_react2.default.Component);

exports.default = Terms;

/***/ })

};;
//# sourceMappingURL=Terms.9e7b1549.js.map
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

function Component() {
    const router = useRouter();
    return (
        <Box>
            <Box
                position={{ base: "", lg: "fixed", xl: "fixed" }}
                mt={{ base: "5" }}
                ml={{ base: "10", lg: "10", xl: "12" }}
            >
                <Button color="#282B2F" onClick={() => router.push("/")}>
                    <IoMdArrowRoundBack />
                </Button>
            </Box>
            <Box
                mx={{ base: "10", lg: "44", xl: "80" }}
                my={{ base: "5", lg: "10", xl: "12" }}
            >
                <body cz-shortcut-listen="true">
                    <div class="page">
                        <div class="header">
                            <div class="container">
                                <p class="title">Return and Refund Policy for hmrhostel.com</p>
                            </div>
                        </div>
                        <div class="translations-content-container">
                            <div class="container">
                                <div class="tab-content translations-content-item en visible" id="en">
                                    <h1>Return and Refund Policy</h1>
                                    <p>Last updated: March 21, 2022</p>
                                    <p>Thank you for shopping at hmrhostel.com.</p>
                                    <p>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns. This Return and Refund Policy has been created with the help of the <a href="https://www.privacypolicies.com/return-refund-policy-generator/" target="_blank">Return and Refund Policy Generator</a>.</p>
                                    <p>The following terms are applicable for any products that You purchased with Us.</p>
                                    <h1>Interpretation and Definitions</h1>
                                    <h2>Interpretation</h2>
                                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                                    <h2>Definitions</h2>
                                    <p>For the purposes of this Return and Refund Policy:</p>
                                    <ul>
                                        <li>
                                            <p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to hmrhostel.com.</p>
                                        </li>
                                        <li>
                                            <p><strong>Goods</strong> refer to the items offered for sale on the Service.</p>
                                        </li>
                                        <li>
                                            <p><strong>Orders</strong> mean a request by You to purchase Goods from Us.</p>
                                        </li>
                                        <li>
                                            <p><strong>Service</strong> refers to the Website.</p>
                                        </li>
                                        <li>
                                            <p><strong>Website</strong> refers to hmrhostel.com, accessible from <a href="https://hmrhostels.com" rel="external nofollow noopener" target="_blank">https://hmrhostels.com</a></p>
                                        </li>
                                        <li>
                                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                                        </li>
                                    </ul>
                                    <h1>Your Order Cancellation Rights</h1>
                                    <p>You are entitled to cancel Your Order within 7 days without giving any reason for doing so.</p>
                                    <p>The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
                                    <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
                                    <ul>
                                        <li>By email: hi@hmrhostels.com</li>
                                    </ul>
                                    <p>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
                                    <h1>Conditions for Returns</h1>
                                    <p>In order for the Goods to be eligible for a return, please make sure that:</p>
                                    <ul>
                                        <li>The Goods were purchased in the last 7 days</li>
                                        <li>The Goods are in the original packaging</li>
                                    </ul>
                                    <p>The following Goods cannot be returned:</p>
                                    <ul>
                                        <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                                        <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                                        <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                                        <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                                    </ul>
                                    <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                                    <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                                    <h1>Returning Goods</h1>
                                    <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
                                    <p>Plot no 40B, Knowledge Park-III, Opposite Metro College,<br />
                                        Greater Noida, Uttar Pradesh- 201310</p>
                                    <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
                                    <h1>Gifts</h1>
                                    <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
                                    <p>If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p>
                                    <h2>Contact Us</h2>
                                    <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                                    <ul>
                                        <li>By email: hi@hmrhostels.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="footer">
                            <div class="container">
                                <p>Generated using <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank">Privacy Policies Generator</a></p>
                            </div>
                        </div>
                    </div>
                </body>
            </Box>
        </Box>
    );
}

export default Component;

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.paragraph}>
        Access and use of the Stream matrix services
      </Text>
      <Text style={styles.paragraph}>
        Your License. Stream Matrix TV is pleased to grant you a non-exclusive
        limited license to use the Stream Matrix TV Services on the Properties,
        including accessing and viewing the Content on a streaming-only basis
        through the Video Player, for personal, non-commercial purposes as set
        forth in these Terms.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={{ fontWeight: "bold", color: "gray" }}>The Content.</Text>{" "}
        You may only access and view the Content personally and for a
        non-commercial purpose in compliance with these Terms. You may not
        either directly or through the use of any device, software, internet
        site, web-based service, or other means remove, alter, bypass, avoid,
        interfere with, or circumvent any copyright, trademark, or other
        proprietary notices marked on the Content or any digital rights
        management mechanism, device, or other content protection or access
        control measure associated with the Content including geo-filtering
        mechanisms. You may not either directly or through the use of any
        device, software, internet site, web-based service, or other means copy,
        download, stream capture, reproduce, duplicate, archive, distribute,
        upload, publish, modify, translate, broadcast, perform, display, sell,
        transmit or retransmit the Content unless expressly permitted by Stream
        Matrix TV in writing. You may not incorporate the Content into, or
        stream or retransmit the Content via, any hardware or software
        application or make it available via frames or in-line links unless
        expressly permitted by Stream Matrix TV in writing. Furthermore, you may
        not create, recreate, distribute or advertise an index of any
        significant portion of the Content unless authorized by Stream Matrix
        TV. You may not build a business utilizing the Content, whether or not
        for profit. The Content covered by these restrictions includes without
        limitation any text, graphics, layout, interface, logos, photographs,
        audio and video materials, and stills. In addition, you are strictly
        prohibited from creating derivative works or materials that otherwise
        are derived from or based on in any way the Content, including montages,
        mash-ups and similar videos, wallpaper, desktop themes, greeting cards,
        and merchandise, unless it is expressly permitted by Stream Matrix TV in
        writing. This prohibition applies even if you intend to give away the
        derivative materials free of charge.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={{ fontWeight: "bold", color: "gray" }}>
          Age Limitations.
        </Text>
        The Stream Matrix TV Services are not intended to be used by children
        without involvement and approval of a parent or guardian. If you are
        under the age of 13, you are not permitted to register with Stream
        Matrix TV or provide your personal information to Stream Matrix TV. If
        you are at least 13 and under 18 years of age, you may register with
        Stream Matrix TV only if you have the consent of your parent or
        guardian.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={{ fontWeight: "bold", color: "gray" }}>
          No Spam/Unsolicited Communications.
        </Text>{" "}
        We know how annoying and upsetting it can be to receive unwanted email
        or instant messages from people you do not know. Therefore, no one may
        use the Stream Matrix TV Services to harvest information about users for
        the purpose of sending, or to facilitate or encourage the sending of,
        unsolicited bulk or other communications. You understand that we may
        take any technical remedies to prevent spam or unsolicited bulk or other
        communications from entering, utilizing, or remaining within our
        computer or communications networks. If you Post (as defined below in
        Section 7) or otherwise send spam, advertising, or other unsolicited
        communications of any kind through the Stream Matrix TV Services, you
        acknowledge that you will have caused substantial harm to Stream Matrix
        TV and that the amount of such harm would be extremely difficult to
        measure. As a reasonable estimation of such harm, you agree to pay
        Stream Matrix TV $50 for each such unsolicited communication you send
        through the Stream Matrix TV Services.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginVertical: 45,

    color: "white",
  },
  heading: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    color: "white",
  },
});

export default AboutScreen;

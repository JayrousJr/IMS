import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        border: "1px solid",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    barcode: {
        marginTop: 20,
        height: 100, // Adjust for barcode height
        width: 200, // Adjust for barcode width
        objectFit: "contain", // Prevent distortion
    },
});

const Barcode = ({ props }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>{props.name} Barcodes</Text>
                </View>
                <View style={styles.section}>
                    <Image src={props.barcode} style={styles.barcode} />
                </View>
            </Page>
        </Document>
    );
};

export default Barcode;

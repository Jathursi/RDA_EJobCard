import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, pdf } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';
import axios from 'axios';
// import Suppliment from '../Outlet/Suppliment';
// import Material from '../../../backend/Model/Material';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
  },
  view: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  },
  OutLine: {
    border: '2px solid black',
    // paddingBottom: 50,
    height: '100%',

  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightAlignedContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  table1: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  table2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  table3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    width: '75%',
  },
  view1: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  table4: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  tableCell: {
    border: '1px solid black',
    padding: 5,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  tableCellTitle: {
    border: '1px solid black',
    padding: 5,
    flex: 1,
    fontWeight: 'bold',
  },
  tableCellTitle2:{
    border: '1px solid black',
    padding: 5,
    flex: 1,
    width: '50%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section1: {
    padding: 5,
  },
  textarea: {
    border: '1px solid black',
    padding: 20,
    height: 100,
  },
  tableCellTitleNo: {
    width: '10%',  // Example width for "No"
  },
  tableCellTitleCost: {
    width: '20%',  // Example width for "COST"
  },
  tableCellTitleQty: {
    width: '15%',  // Example width for "Qty"
  },
  tableCellTitleTotal: {
    width: '25%',  // Example width for "TOTAL"
  },
  tableCellTitleSign: {
    width: '30%',  // Example width for "Sign"
  },
});

const PrintDocument = ({ Estimated, Material, Labour, Machining, Transport, Stock, Sundries, Other, Welfare,
  Supplement 
}) => {
let materialTotal = 0;
let labourTotal = 0;
let stockTotal = 0;
let transportTotal = 0;
let machiningTotal = 0;
let sundriesTotal = 0;
let othersTotal = 0;
let weldingTotal = 0;

// Grand total across all sections
let grandTotal = 0;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.OutLine}>
          <View style={styles.section1}>
            <Text style={styles.header}>Road Development Authority</Text>
            <Text>Mechanical workshop Anuradhapura</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Date:</Text></View>
            <View style={styles.tableCell}><Text>{Estimated.Date}</Text></View>
            <View style={styles.tableCellTitle}><Text>Estimated by:</Text></View>
            <View style={styles.tableCell}><Text>{Estimated.Estimated}</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>MATERIAL</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Material</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Material) && Material.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Material}</Text></View>
              <View style={styles.tableCell}><Text>{item.Mat_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.MatQ}</Text></View>
              <View style={styles.tableCell}><Text> {materialTotal += item.Mat_cost * item.MatQ}</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>LABOUR</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Labour</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Labour) && Labour.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Labour}</Text></View>
              <View style={styles.tableCell}><Text>{item.Lab_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.LabQ}</Text></View>
              <View style={styles.tableCell}><Text>-</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>STOCK</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Stock</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Stock) && Stock.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Stock}</Text></View>
              <View style={styles.tableCell}><Text>{item.Stock_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.StockQ}</Text></View>
              <View style={styles.tableCell}><Text>{ stockTotal +=item.Stock_cost * item.StockQ}</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>TRANSPORT</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Transport</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Transport) && Transport.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Transport}</Text></View>
              <View style={styles.tableCell}><Text>{item.Trans_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.TransQ}</Text></View>
              <View style={styles.tableCell}><Text>{transportTotal += item.Trans_cost * item.TransQ}</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>MACHINING</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Machining</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Machining) && Machining.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Machining}</Text></View>
              <View style={styles.tableCell}><Text>{item.Mac_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.MacQ}</Text></View>
              <View style={styles.tableCell}><Text>{machiningTotal += item.Mac_cost * item.MacQ}</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>SUNDRIES</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Sundries</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Sundries) && Sundries.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Sundries}</Text></View>
              <View style={styles.tableCell}><Text>{item.Sun_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.SunQ}</Text></View>
              <View style={styles.tableCell}><Text>{sundriesTotal += item.Sun_cost * item.SunQ}</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>OTHERS</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>Other</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Other) && Other.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.other}</Text></View>
              <View style={styles.tableCell}><Text>{item.other_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.otherQ}</Text></View>
              <View style={styles.tableCell}><Text>{othersTotal += item.other_cost * item.otherQ}</Text></View>
            </View>
          ))}
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>WELDING</Text></View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableCellTitle}><Text>welding</Text></View>
            <View style={styles.tableCellTitle}><Text>Cost</Text></View>
            <View style={styles.tableCellTitle}><Text>Qty</Text></View>
            <View style={styles.tableCellTitle}><Text>Total</Text></View>
          </View>
          {Array.isArray(Welfare) && Welfare.map((item, index) => (
            <View style={styles.table} key={index}>
              <View style={styles.tableCell}><Text>{item.Welding}</Text></View>
              <View style={styles.tableCell}><Text>{item.Wel_cost}</Text></View>
              <View style={styles.tableCell}><Text>{item.WelQ}</Text></View>
              <View style={styles.tableCell}><Text>{weldingTotal += item.Wel_cost * item.WelQ}</Text></View>
            </View>
          ))}
          <View style={styles.table4}>
            <View style={styles.tableCellTitle2}><Text>GRAND TOTAL</Text></View>
            <View style={styles.tableCell}><Text>{materialTotal + machiningTotal + stockTotal + sundriesTotal + weldingTotal + othersTotal + transportTotal}</Text></View>
          </View>

        </View>
        
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.OutLine}>
          <View style={styles.table}>
            <View style={styles.tableCellTitle2}><Text>SUPPLEMENT DATA</Text></View>
          </View>
          
          {Supplement.map((item, index) => (
            <View key={index}>
              <View style={styles.table4}>
                <View style={styles.tableCellTitle}><Text>Date:</Text></View>
                <View style={styles.tableCell}><Text>{item.Date}</Text></View>
                <View style={styles.tableCellTitle}><Text>Estimated by:</Text></View>
                <View style={styles.tableCell}><Text>{item.Estimated}</Text></View>
              </View>
              <View style={styles.table4}>
                <View style={styles.tableCellTitle}><Text>Title</Text></View>
                <View style={styles.tableCellTitle}><Text>Cost</Text></View>
                <View style={styles.tableCellTitle}><Text>Qty</Text></View>
                <View style={styles.tableCellTitle}><Text>Total</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Labour}</Text></View>
                <View style={styles.tableCell}><Text>{item.Lab_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.LabQ}</Text></View>
                <View style={styles.tableCell}><Text>-</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Material}</Text></View>
                <View style={styles.tableCell}><Text>{item.Mat_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.MatQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.Mat_cost*item.MatQ}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Machining}</Text></View>
                <View style={styles.tableCell}><Text>{item.Mac_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.MacQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.Mac_cost*item.MacQ}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Transport}</Text></View>
                <View style={styles.tableCell}><Text>{item.Trans_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.TransQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.Trans_cost*item.TransQ}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Welding}</Text></View>
                <View style={styles.tableCell}><Text>{item.Wel_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.WelQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.WelQ*item.Wel_cost}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.other}</Text></View>
                <View style={styles.tableCell}><Text>{item.other_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.otherQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.other_cost*item.otherQ}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Sundries}</Text></View>
                <View style={styles.tableCell}><Text>{item.Sun_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.SunQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.Sun_cost*item.SunQ}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>{item.Stock}</Text></View>
                <View style={styles.tableCell}><Text>{item.Stock_cost}</Text></View>
                <View style={styles.tableCell}><Text>{item.StockQ}</Text></View>
                <View style={styles.tableCell}><Text>{item.Stock_cost*item.StockQ}</Text></View>
              </View>
              <View style={styles.table}>
                <View style={styles.tableCell}><Text>Total</Text></View>
                <View style={styles.tableCell}><Text>{item.Mat_cost*item.MatQ + item.Mac_cost*item.MacQ + item.Trans_cost*item.TransQ + item.WelQ*item.Wel_cost + item.other_cost*item.otherQ+ item.Sun_cost*item.SunQ + item.Stock_cost*item.StockQ}</Text></View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PrintButton = () => {
  const { id } = useParams();
  const [values, setValues] = useState({});
  const [valuesLab, setValuesLab] = useState([]);
  const [valuesImp, setValuesImp] = useState([]);
  const [valueStock, setValueStock] = useState([]);
  const [valueTrans, setValueTrans] = useState([]);
  const [valueMach, setValueMach] = useState([]);
  const [valueSup, setValueSup] = useState([]);
  const [valueOther, setValueOther] = useState([]);
  const [valueWel, setValueWel] = useState([]);
  const [Supplement, setSup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/est/Estview/${id}`);
        setValues(response.data[0]);

        const otherResponse = await axios.get(`http://localhost:8081/api/est/Otherother/${id}`);
        setValueOther(otherResponse.data);

        const stockResponse = await axios.get(`http://localhost:8081/api/est/OtherStock/${id}`);
        setValueStock(stockResponse.data);

        const macResponse = await axios.get(`http://localhost:8081/api/est/OtherMac/${id}`);
        setValueMach(macResponse.data);

        const welResponse = await axios.get(`http://localhost:8081/api/est/OtherWel/${id}`);
        setValueWel(welResponse.data);

        const transResponse = await axios.get(`http://localhost:8081/api/est/OtherTrans/${id}`);
        setValueTrans(transResponse.data);

        const sunResponse = await axios.get(`http://localhost:8081/api/est/OtherSun/${id}`);
        setValueSup(sunResponse.data);

        const matResponse = await axios.get(`http://localhost:8081/api/est/EstviewMat/${id}`);
        setValuesImp(matResponse.data);

        const labResponse = await axios.get(`http://localhost:8081/api/est/EstviewLab/${id}`);
        setValuesLab(labResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
  try {
    const suplimentresponse = await axios.get(`http://localhost:8081/api/sup/SupViewgroup/${id}`);
    setSup(suplimentresponse.data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
    fetchData();
  }, [id]);

  const handleSave = async () => {
    const blob = await pdf(
      <PrintDocument
        Estimated={values}
        Material={valuesImp}
        Labour={valuesLab}
        Machining={valueMach}
        Transport={valueTrans}
        Stock={valueStock}
        Sundries={valueSup}
        Other={valueOther}
        Welfare={valueWel}
        Supplement={Supplement}
      />
    ).toBlob();
    const fileName = `Estimate${id}.pdf`;
    saveAs(blob, fileName);

    const formData = new FormData();
    formData.append('file', blob, fileName);
    formData.append('customName', fileName);

    try {
      const response = await axios.post(`http://localhost:8081/api/resource/upload/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("File uploaded successfully");
      console.log(response.data);  // Log the server response for debugging
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    }
  };

  return (
    <div>
      <PDFViewer width="100%" height="600">
        <PrintDocument
          Estimated={values}
          Material={valuesImp}
          Labour={valuesLab}
          Machining={valueMach}
          Transport={valueTrans}
          Stock={valueStock}
          Sundries={valueSup}
          Other={valueOther}
          Welfare={valueWel}
          Supplement={Supplement}
        />
      </PDFViewer>
      <div className='form-Imp-btn'>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default PrintButton;
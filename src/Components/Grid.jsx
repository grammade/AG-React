import { AgGridReact } from 'ag-grid-react'; 
import { 
    useContext,
    useRef,
    useCallback,
    useState, 
    useMemo, 
    useEffect} from 'react';
import { 
    NumberFilterModule,
    TextFilterModule,
    DateFilterModule,
    QuickFilterModule,
    AllCommunityModule, 
    ColumnAutoSizeModule,
    ModuleRegistry } from 'ag-grid-community'; 

import { ServerSideRowModelModule } from 'ag-grid-enterprise';
import { GridContext } from '../App';

import './Grid.css';


ModuleRegistry.registerModules([
    AllCommunityModule, 
    NumberFilterModule,
    TextFilterModule,
    DateFilterModule,
    QuickFilterModule,
    ServerSideRowModelModule,
    ColumnAutoSizeModule]);

function Grid(){
    const gridRef = useRef(null);
    const {serverSide} = useContext(GridContext);

    useEffect(() => {
        console.log('inGrid: ', serverSide)
    },[serverSide])

    const [rowData, setRowData] = useState([
        { BillingNo: "20250504-0001", PolicyNo: "28374619283", BillingDate: "2025-05-08", Product: "CIA", MonthsBilled: 3, Amount: 150000.00, Status: "Paid" },
        { BillingNo: "20250504-0002", PolicyNo: "19283746501", BillingDate: "2025-05-08", Product: "FBI", MonthsBilled: 3, Amount: 50000.00, Status: "Not Paid" },
        { BillingNo: "20250504-0003", PolicyNo: "37482910476", BillingDate: "2025-05-17", Product: "MKE", MonthsBilled: 6, Amount: 300000.00, Status: "Canceled" },
        { BillingNo: "20250504-0004", PolicyNo: "91827364500", BillingDate: "2025-05-02", Product: "JFK", MonthsBilled: 2, Amount: 100000.00, Status: "Paid" },
        { BillingNo: "20250504-0005", PolicyNo: "09182736455", BillingDate: "2025-05-12", Product: "CIA", MonthsBilled: 4, Amount: 200000.00, Status: "Not Paid" },
        { BillingNo: "20250504-0006", PolicyNo: "56473829100", BillingDate: "2025-05-17", Product: "FBI", MonthsBilled: 3, Amount: 150000.00, Status: "Paid" },
        { BillingNo: "20250504-0007", PolicyNo: "83746519283", BillingDate: "2025-05-22", Product: "MKE", MonthsBilled: 5, Amount: 250000.00, Status: "Canceled" },
        { BillingNo: "20250504-0008", PolicyNo: "28374619284", BillingDate: "2025-05-12", Product: "CIA", MonthsBilled: 3, Amount: 50000.00, Status: "Paid" },
        { BillingNo: "20250504-0009", PolicyNo: "19283746502", BillingDate: "2025-05-02", Product: "JFK", MonthsBilled: 2, Amount: 100000.00, Status: "Not Paid" },
        { BillingNo: "20250504-0010", PolicyNo: "37482910477", BillingDate: "2025-05-25", Product: "FBI", MonthsBilled: 6, Amount: 300000.00, Status: "Paid" },
        { BillingNo: "20250504-0011", PolicyNo: "91827364501", BillingDate: "2025-05-29", Product: "MKE", MonthsBilled: 3, Amount: 150000.00, Status: "Canceled" },
        { BillingNo: "20250504-0012", PolicyNo: "09182736456", BillingDate: "2025-05-25", Product: "CIA", MonthsBilled: 4, Amount: 200000.00, Status: "Not Paid" },
        { BillingNo: "20250504-0013", PolicyNo: "56473829101", BillingDate: "2025-05-30", Product: "JFK", MonthsBilled: 5, Amount: 250000.00, Status: "Paid" },
        { BillingNo: "20250504-0014", PolicyNo: "83746519284", BillingDate: "2025-05-17", Product: "CIA", MonthsBilled: 2, Amount: 100000.00, Status: "Not Paid" },
        { BillingNo: "20250504-0015", PolicyNo: "28374619285", BillingDate: "2025-05-22", Product: "FBI", MonthsBilled: 3, Amount: 50000.00, Status: "Paid" },
        { BillingNo: "20250504-0016", PolicyNo: "19283746503", BillingDate: "2025-05-08", Product: "MKE", MonthsBilled: 3, Amount: 150000.00, Status: "Canceled" },
        { BillingNo: "20250504-0017", PolicyNo: "37482910478", BillingDate: "2025-05-30", Product: "JFK", MonthsBilled: 6, Amount: 300000.00, Status: "Paid" },
        { BillingNo: "20250504-0018", PolicyNo: "91827364502", BillingDate: "2025-05-29", Product: "FBI", MonthsBilled: 2, Amount: 100000.00, Status: "Not Paid" },
        { BillingNo: "20250504-0019", PolicyNo: "09182736457", BillingDate: "2025-05-12", Product: "CIA", MonthsBilled: 4, Amount: 200000.00, Status: "Paid" },
        { BillingNo: "20250504-0020", PolicyNo: "56473829102", BillingDate: "2025-05-22", Product: "MKE", MonthsBilled: 5, Amount: 250000.00, Status: "Canceled" },
    ]);    

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
      { field: "BillingNo", flex: 2, filter: "agTextColumnFilter" },
      { field: "PolicyNo", flex: 2, filter: "agTextColumnFilter" },
      { field: "Product", flex: 1, filter: "agTextColumnFilter" },
      { field: "BillingDate", flex: 2, filter: "agDateColumnFilter" },
      {
        field: "MonthsBilled",
        headerName: "Months\nBilled",
        flex: 1,
        maxWidth: 100,
        headerClass: "ag-header-whitespace",
      },
      {
        field: "Amount",
        flex: 2,
        valueFormatter: (params) => {
          if (params.value == null) return "";
          return Number(params.value).toLocaleString("en-US");
        },
      },
      {
        field: "Status",
        filter: "agTextColumnFilter",
        flex: 1,
        maxWidth: 200,
      },
    ]);
    const autoSizeStrategy = useMemo(() => {
        return {
            type: "fitGridWidth"
        };
    }, [])
    const resizeCallback = useCallback(() => {
        gridRef.current.api.sizeColumnsToFit({
            defaultMinWidth: 100
          });
    }, [])
    const globalFilterCallback = useCallback(() => {
        gridRef.current.api.setGridOption(
            "quickFilterText",
            document.getElementById('globalFilter').value
        );
    }, [])
        
    useEffect(() => {
        window.addEventListener("resize", resizeCallback);
        return () => {
            window.removeEventListener("resize", resizeCallback)
        }
    }, [gridRef, resizeCallback])

    const datasource = {
        getRows: async (params) => {

            const { startRow, endRow, filterModel, sortModel } = params.request;
            const query = {
                start: startRow,
                end: endRow,
                filters: filterModel,
                sorts: sortModel,
            };
            console.log("[Datasource] Requesting rows", query);

            await sleep(2000);
            params.success({rowData: rowData})
        }
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    return (
        <div className='is-flex is-flex-direction-column is-align-items-center' style={{width:'100%'}}>
            <input
                style={{width: '100%'}}
                class="input mb-4"
                type="text"
                id="globalFilter"
                placeholder="Search..."
                onInput={globalFilterCallback}
            />
            <div style={{ height: 500, width: '100%'}}>
                <AgGridReact
                    key={serverSide ? 'server' : 'client'}
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={colDefs}
                    {...(serverSide && {
                        rowModelType:"serverSide",
                        serverSideDatasource: datasource
                    })}
                />
            </div>
        </div>
    )

}

export default Grid;
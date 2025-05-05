import { AgGridReact } from 'ag-grid-react';
import {
    useContext,
    useRef,
    useCallback,
    useState,
    useMemo,
    useEffect
} from 'react';
import {
    NumberFilterModule,
    TextFilterModule,
    DateFilterModule,
    QuickFilterModule,
    AllCommunityModule,
    ColumnAutoSizeModule,
    ModuleRegistry
} from 'ag-grid-community';

import { GridContext } from '../App';
import rowData from '../Mock/DataGrid';

import './Grid.css';


ModuleRegistry.registerModules([
    AllCommunityModule,
    NumberFilterModule,
    TextFilterModule,
    DateFilterModule,
    QuickFilterModule,
    ColumnAutoSizeModule]);

function Grid() {
    const gridRef = useRef(null);
    const { serverSide } = useContext(GridContext);


    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "BillingNo", flex: 2, filter: "agTextColumnFilter",
            cellRenderer: (props) => {
                if (props.value !== undefined) {
                    return props.value;
                } else {
                    return (
                        <img src="https://www.ag-grid.com/example-assets/loading.gif" />
                    );
                }
            }
        },
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
            const { startRow, endRow, filterModel, sortModel } = params;
            const query = {
                start: startRow,
                end: endRow,
                filters: filterModel,
                sorts: sortModel,
            };
            console.log("[Datasource] Requesting rows", query);
            console.log("resulting array: ", rowData.slice(startRow, endRow))

            await sleep(2000);
            params.successCallback(rowData.slice(startRow, endRow), rowData.length)
        }
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    return (
        <div className='is-flex is-flex-direction-column is-align-items-center' style={{ width: '100%' }}>
            <input
                style={{ width: '100%' }}
                class="input mb-4"
                type="text"
                id="globalFilter"
                placeholder="Search..."
                onInput={globalFilterCallback}
            />
            <div style={{ height: 200, width: '100%' }}>
                <AgGridReact
                    key={serverSide ? 'server' : 'client'}
                    ref={gridRef}
                    {... (!serverSide && { rowData: rowData })}
                    columnDefs={colDefs}
                    {...(serverSide && {
                        rowModelType: "infinite",
                        datasource: datasource,
                        cacheBlockSize: 5,
                        blockLoadDebounceMillis: 2000
                    })}
                />
            </div>
        </div>
    )

}

export default Grid;
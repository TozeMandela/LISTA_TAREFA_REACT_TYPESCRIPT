
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
    :root{
        --priColor: crimson;
        --secColor: white;
        --treeColor: #db304f;
    };
    
    * {
        font-family: 'Courier New', Courier, monospace;
        outline: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    };
    body {        
        width: 100%;
        height: 100%;
    };
    .header {
        background: var(--priColor);
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: center;
        a {
            color: var(--secColor);
            text-decoration: none;
            font-size: 20px;
            padding: 10px;
            }
            a:hover{
                color: #c60126;
            };
    };

    .welcoC{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30rem;
        flex-direction: column;
        * {
            margin-top: 20px;
        }
        
    };
    .buttonn {
        padding: 10px 50px;
        border-radius: 10px;
        background: var(--priColor);
        color: var(--secColor);
        cursor: pointer;
    }
    .buttonn:hover {
        transition: 1s;
        background: var(--secColor);
        border: 1px solid var(--priColor);
        color: var(--priColor);
    };

    form div {
        width: 50%;
        margin: 20px auto auto;
    }
    label span{
        display: block;
        font-weight: bold;
    }
    ::placeholder {
        padding: 5px;
    }
    input {
        width: 100%;
        height: 30px;
        display: block;
    }

    .DADH{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 10px 0px;
        label{
            width: 100%;
        }
    }
    .ADH {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        justify-content: space-around;
    }select {
        margin-bottom: 20px;
    }

    textarea {
        text-decoration: none;
        list-style: none;
        height: 170px;
        width: 100%;
        resize: none;
    }

    table{
        margin: 20px auto;
        padding: 2px;
        border: 1px solid yellow;
        border-collapse: collapse;
        border-radius: 10px;
        overflow: hidden;
    }
    th{
        background: var(--priColor);
        padding: 10px;
    }
     
    tr, td {
        border-bottom: 1px solid var(--secColor);
        padding: 10px;
    }
    
    tr:nth-child(even) {
        background-color: var(--priColor);
    }

    tr:hover{
        background-color: var(--treeColor);
        color: var(--secColor);
        cursor: pointer;
    }

    tr:nth-child(even):hover{
        background-color: var(--treeColor);
        color: var(--secColor);
        cursor: pointer; 
    }
    .div-table {
        overflow-x: auto;
    }::-webkit-scrollbar{
        background-color: var(--priColor);
        border: 1px solid;
    }::-webkit-scrollbar-thumb{
        background-color: var(--secColor);
        border: 1px solid yellow;
        border-radius: 10px;
    }::-webkit-scrollbar-track{
        width: 10px;
        border: 1px solid cyan;
        
    }
    
    td a{
        list-style: none;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 5px;
    }
    td a:hover{
        color: aqua;
    }
`;

export default Global;
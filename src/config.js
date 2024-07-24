
export const imageIcon = "/images/sangsolution.png";
export const primaryColor = "#00405E"
export const secondryColor = "#1E8FD8"
export const thirdColor = "#0073AA"
export const primaryButtonColor = "#ffff"
export const activePrimaryColor = "#1D4D86"

export const SideBarIcons = [
  { id: 1, parent: 0, iconName: "Home", icon: import("@mui/icons-material/Home"), child: true },
  { id: 2, parent: 0, iconName: "Financials", icon: import("@mui/icons-material/LocalAtm"), child: false },
  { id: 3, parent: 0, iconName: "Inventory", icon: import("@mui/icons-material/Inventory"), child: false },
  { id: 4, parent: 0, iconName: "Fixed Asset", icon: import("@mui/icons-material/AccountBalance"), child: false },
  { id: 5, parent: 0, iconName: "Production", icon: import("@mui/icons-material/Warehouse"), child: false },
  { id: 6, parent: 0, iconName: "Point of Sale", icon: import("@mui/icons-material/PointOfSale"), child: false },
  { id: 7, parent: 0, iconName: "Quality Control", icon: import("@mui/icons-material/PlaylistAddCheck"), child: false },
  { id: 8, parent: 0, iconName: "Settings", icon: import("@mui/icons-material/Settings"), child: true },
  { id: 9, parent: 1, iconName: "Company", icon: null, child: true },
  { id: 10, parent: 1, iconName: "Security", icon: null, child: true },
  { id: 11, parent: 1, iconName: "Master", icon: null, child: true },
  { id: 12, parent: 10, iconName: "Create Profile", icon: null, url: "/security" },
  { id: 13, parent: 10, iconName: "Create Role", icon: null, url: "/security" },
  { id: 14, parent: 10, iconName: "Create User", icon: null, url: "/security" },
  { id: 15, parent: 11, iconName: "Account", icon: null, child: true },
  // { id: 16, parent: 11, iconName: "Currency", icon: null, url: "/Master"},
  { id: 17, parent: 11, iconName: "Product", icon: null, child: true },
  { id: 16, parent: 11, iconName: "Currency", icon: null, url: "/Master"},
  { id: 18, parent: 11, iconName: "Warehouse", icon: null, url: "/Master" },
  { id: 19, parent: 15, iconName: "Account Master", icon: null, url: "/Master" },
  { id: 20, parent: 15, iconName: "Customer/Vendor master", icon: null, url: "/Master" },
  { id: 21, parent: 38, iconName: "Currency Master", icon: null, url: "/EntitySettings" },
  { id: 22, parent: 38, iconName: "Exchange Rate", icon: null, url: "/EntitySettings" },
  { id: 23, parent: 38, iconName: "Exchange Rate History", icon: null, url: "/EntitySettings" },
  { id: 24, parent: 17, iconName: "Product", icon: null, url: "/Master" },
  { id: 25, parent: 17, iconName: "Unit", icon: null, url: "/Master" },
  { id: 26, parent: 17, iconName: "Unit Conversion", icon: null, url: "/Master" },
  { id: 27, parent: 17, iconName: "Seller Price Book", icon: null, url: "/Master" },
  { id: 28, parent: 17, iconName: "Buyer Price Book", icon: null, url: "/Master" },
  // { id: 29, parent:17, iconName: "Barcode Definition", icon:  import("@mui/icons-material/Inventory"),url:"/Master" },
  { id: 30, parent: 8, iconName: "General Settings", icon: null, url: "/GeneralSettings" },
  // { id: 32, parent: 8, iconName: "Master Settings", icon: null, url: "/MasterSettings" },
  { id: 31, parent: 8, iconName: "Voucher Settings", icon: null, url: "/VoucherSettings" },

  { id: 33,parent:8, iconName: "Tag Creation", icon:  null ,url:"/TagCreation" },
  // { id: 34, parent:30, iconName: "Account tag Management", icon:  import("@mui/icons-material/Inventory"),url:"/MainSettings" },
  { id: 35, parent: 9, iconName: "Open Company", icon: null, url: "/" },
  // { id: 36, parent:9, iconName: "Create Company", icon:  import("@mui/icons-material/Home"),url:"/Company" },
  { id: 37, parent: 9, iconName: "Edit Company", icon: null, url: "/Company" },
  { id: 38, parent: 39, iconName: "Currency", icon: null, child: true  },
  // { id: 39, parent: 8, iconName: "Entity Settings", icon: null, child: true },
  { id: 40, parent: 39, iconName: "Finance", icon: null, url: "/EntitySettings" },
  { id: 41, parent: 39, iconName: "Inventory", icon: null, url: "/EntitySettings" },
  { id: 42, parent: 39, iconName: "Fixed Asset", icon: null, url: "/EntitySettings" },
  { id: 43, parent: 39, iconName: "General", icon: null, url: "/EntitySettings" },
  { id: 44, parent: 8, iconName: "Configuration", icon: null, child: true },
  { id: 45, parent: 44, iconName: "Voucher Configuration", icon: null, url: "/Configuration" },
  { id: 46, parent: 44, iconName: "Master Configuration", icon: null, url: "/Configuration" },
  { id: 47, parent: 44, iconName: "Views Configuration", icon: null, url: "/Configuration" },
  { id: 48, parent: 44, iconName: "Work Flow", icon: null, url: "/Configuration" },
  { id: 49, parent: 44, iconName: "VAT Configuration", icon: null, url: "/Configuration" },
  { id: 50, parent: 8, iconName: "EntityMaster", icon: null, url: "/EntityMaster" },
  { id: 51, parent: 11, iconName: "Fixed Asset", icon: null, url: "/Master" },
  { id: 52, parent: 11, iconName: "Tax Code", icon: null, url: "/Master" },
  { id: 53, parent: 11, iconName: "Place of Supply", icon: null, url: "/Master" },
  { id: 54, parent: 11, iconName: "Jurisdiction", icon: null, url: "/Master" },
  { id: 55, parent: 11, iconName: "Bank", icon: null, url: "/Master" },
  { id: 56, parent: 11, iconName: "Bank Branches", icon: null, url: "/Master" },
  { id: 57, parent: 11, iconName: "Outlet", icon: null, url: "/Master" },
  { id: 58, parent: 11, iconName: "Nationality", icon: null, url: "/Master" },
  { id: 59, parent: 11, iconName: "Country", icon: null, url: "/Master" },
  { id: 60, parent: 11, iconName: "Province", icon: null, url: "/Master" },
  { id: 61, parent: 11, iconName: "Territory", icon: null, url: "/Master" },
  { id: 62, parent: 11, iconName: "Township", icon: null, url: "/Master" },
  { id: 63, parent: 11, iconName: "Zone", icon: null, url: "/Master" },
  { id: 64, parent: 11, iconName: "City", icon: null, url: "/Master" },
  { id: 65, parent: 11, iconName: "Employee", icon: null, url: "/Master" },
  

];

export let config = null;
export let CORE_URL = null;
export let SECURITY_URL = null;
export let channelId = null;

export const getConfig = () => {
    if (!config) {
      throw new Error('Config has not been loaded!');
    }
    return config;
  };
export const loadConfig = async () => {
    const response = await fetch('/config.json');
    config = await response.json();
    CORE_URL = config.CORE_URL; 
    SECURITY_URL = config.SECURITY_URL;
    channelId = config.channelId
    
}
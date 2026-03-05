-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2026 at 01:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecosgcompany`
--

-- --------------------------------------------------------

--
-- Table structure for table `acc_accountcontro_tb`
--

CREATE TABLE `acc_accountcontro_tb` (
  `accountcontro_id` int(11) NOT NULL,
  `accountcontro_name` varchar(50) NOT NULL,
  `accountcontro_group` int(11) NOT NULL,
  `accountcontro_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_accountdetails_tb`
--

CREATE TABLE `acc_accountdetails_tb` (
  `detail_id` int(11) NOT NULL,
  `detail_account` int(11) NOT NULL,
  `detail_dr` double NOT NULL DEFAULT 0,
  `detail_cr` double NOT NULL DEFAULT 0,
  `detail_transid` int(11) NOT NULL,
  `detail_transcode` varchar(50) NOT NULL,
  `detail_transdate` varchar(50) NOT NULL,
  `detail_transrecorddate` varchar(50) NOT NULL,
  `detail_transuser` int(11) NOT NULL,
  `detail_status` varchar(50) NOT NULL,
  `detail_statusdate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_accountgroup_tb`
--

CREATE TABLE `acc_accountgroup_tb` (
  `accountgroup_id` int(11) NOT NULL,
  `accountgroup_name` varchar(50) NOT NULL,
  `accountgroup_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `acc_accountgroup_tb`
--

INSERT INTO `acc_accountgroup_tb` (`accountgroup_id`, `accountgroup_name`, `accountgroup_status`) VALUES
(1, 'ASSETS', 0),
(2, 'LIABILITY', 0),
(3, 'INCOME', 0),
(4, 'EXPENSE', 0),
(5, 'EQUITY', 0);

-- --------------------------------------------------------

--
-- Table structure for table `acc_accounts_tb`
--

CREATE TABLE `acc_accounts_tb` (
  `account_id` int(11) NOT NULL,
  `account_name` varchar(50) NOT NULL,
  `account_contro` int(11) NOT NULL,
  `account_totdr` double NOT NULL DEFAULT 0,
  `account_totcr` double NOT NULL DEFAULT 0,
  `account_amtbal` double NOT NULL DEFAULT 0,
  `account_desc` varchar(100) NOT NULL,
  `account_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_payroll_componentdetails_tb`
--

CREATE TABLE `acc_payroll_componentdetails_tb` (
  `componentdetails_id` int(11) NOT NULL,
  `componentdetails_payroll_detail` int(11) NOT NULL DEFAULT 0,
  `componentdetails_component` int(11) NOT NULL,
  `componentdetails_amount` double NOT NULL DEFAULT 0,
  `componentdetails_employer_portion` double NOT NULL DEFAULT 0,
  `componentdetails_employee_portion` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_payroll_componenttype_tb`
--

CREATE TABLE `acc_payroll_componenttype_tb` (
  `componenttype_id` int(11) NOT NULL,
  `componenttype_name` varchar(50) NOT NULL,
  `componenttype_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `acc_payroll_componenttype_tb`
--

INSERT INTO `acc_payroll_componenttype_tb` (`componenttype_id`, `componenttype_name`, `componenttype_status`) VALUES
(1, 'EARNING', 0),
(2, 'DEDUCTION', 0),
(3, 'TAX', 0);

-- --------------------------------------------------------

--
-- Table structure for table `acc_payroll_component_tb`
--

CREATE TABLE `acc_payroll_component_tb` (
  `component_id` int(11) NOT NULL,
  `component_type` int(11) NOT NULL,
  `component_name` varchar(50) NOT NULL,
  `component_ledger` int(11) NOT NULL,
  `component_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_payroll_details_tb`
--

CREATE TABLE `acc_payroll_details_tb` (
  `payroll_detail_id` int(11) NOT NULL,
  `payroll_detail_payroll` int(11) NOT NULL,
  `payroll_detail_staff` int(11) NOT NULL,
  `payroll_detail_gross_salary` double NOT NULL,
  `payroll_detail_total_deductions` double NOT NULL,
  `payroll_detail_net_salary` double NOT NULL,
  `payroll_detail_payment_status` varchar(50) NOT NULL COMMENT 'pending,paid'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_payroll_tb`
--

CREATE TABLE `acc_payroll_tb` (
  `payroll_id` int(11) NOT NULL,
  `payroll_month` int(11) NOT NULL,
  `payroll_year` int(11) NOT NULL,
  `payroll_amount` double NOT NULL,
  `payroll_processed_date` varchar(50) NOT NULL,
  `payroll_transid` int(11) NOT NULL,
  `payroll_transcode` varchar(50) NOT NULL,
  `payroll_paymentproof` varchar(150) NOT NULL,
  `payroll_status` int(11) NOT NULL COMMENT 'Draft,Approved,Paid'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_supplier_invoice`
--

CREATE TABLE `acc_supplier_invoice` (
  `supinv_invoice_id` int(11) NOT NULL,
  `supinv_invoice_date` varchar(50) DEFAULT NULL,
  `supinv_supplier_id` int(11) DEFAULT NULL,
  `supinv_po_id` int(11) DEFAULT NULL,
  `supinv_grn_id` int(11) DEFAULT NULL,
  `supinv_due_date` varchar(20) DEFAULT NULL,
  `supinv_subtotal` double DEFAULT NULL,
  `supinv_tax_amount` double DEFAULT NULL,
  `supinv_total_amount` double DEFAULT NULL,
  `supinv_status` varchar(20) DEFAULT NULL,
  `supinv_trans_id` int(11) DEFAULT NULL,
  `supinv_created_by` int(11) DEFAULT NULL,
  `supinv_approved_by` int(11) DEFAULT NULL,
  `supinv_created_at` varchar(20) DEFAULT NULL,
  `supinv_approved_at` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_supplier_invoice_items`
--

CREATE TABLE `acc_supplier_invoice_items` (
  `supinv_invoice_item_id` int(11) NOT NULL,
  `supinv_invoice_id` int(11) DEFAULT NULL,
  `supinv_po_item_id` int(11) DEFAULT NULL,
  `supinv_grn_item_id` int(11) DEFAULT NULL,
  `supinv_item` varchar(100) DEFAULT NULL,
  `supinv_description` varchar(255) DEFAULT NULL,
  `supinv_quantity` double DEFAULT NULL,
  `supinv_unit_price` double DEFAULT NULL,
  `supinv_tax_percent` double DEFAULT NULL,
  `supinv_tax_amount` double DEFAULT NULL,
  `supinv_total_amount` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acc_transaction_tb`
--

CREATE TABLE `acc_transaction_tb` (
  `trans_id` int(11) NOT NULL,
  `trans_user` int(11) NOT NULL,
  `trans_code` varchar(50) NOT NULL,
  `trans_date` varchar(50) NOT NULL,
  `trans_desc` varchar(50) NOT NULL,
  `trans_status` varchar(50) NOT NULL COMMENT 'pending,approved,cancelled',
  `trans_recorddate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_auditing_tb`
--

CREATE TABLE `adm_auditing_tb` (
  `auditing_id` int(11) NOT NULL,
  `auditing_user` int(11) NOT NULL,
  `auditing_details` text NOT NULL,
  `auditing_date` varchar(50) NOT NULL,
  `auditing_mudule` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_cells_tb`
--

CREATE TABLE `adm_cells_tb` (
  `cells_id` int(11) NOT NULL,
  `cells_name` varchar(50) NOT NULL,
  `cells_sector` int(11) NOT NULL,
  `cells_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_center_tb`
--

CREATE TABLE `adm_center_tb` (
  `center_id` int(11) NOT NULL,
  `center_name` varchar(50) NOT NULL,
  `center_village` int(11) NOT NULL,
  `center_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_company_info_tb`
--

CREATE TABLE `adm_company_info_tb` (
  `comp_id` int(11) NOT NULL,
  `comp_name` varchar(100) NOT NULL,
  `comp_tin` varchar(30) NOT NULL,
  `comp_tel` varchar(30) NOT NULL,
  `comp_email` varchar(100) NOT NULL,
  `comp_address` text NOT NULL,
  `comp_pobox` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adm_company_info_tb`
--

INSERT INTO `adm_company_info_tb` (`comp_id`, `comp_name`, `comp_tin`, `comp_tel`, `comp_email`, `comp_address`, `comp_pobox`) VALUES
(1, 'ECOSG COMPANY LTD', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `adm_department_tb`
--

CREATE TABLE `adm_department_tb` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(50) NOT NULL,
  `dept_status` int(11) NOT NULL DEFAULT 0,
  `dept_creationdate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_district_tb`
--

CREATE TABLE `adm_district_tb` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(50) NOT NULL,
  `district_province` int(11) NOT NULL DEFAULT 0,
  `district_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_logs_tb`
--

CREATE TABLE `adm_logs_tb` (
  `log_id` int(11) NOT NULL,
  `log_user` int(11) NOT NULL,
  `login_date` varchar(100) NOT NULL DEFAULT 'closed',
  `log_outdate` varchar(100) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `adm_logs_tb`
--

INSERT INTO `adm_logs_tb` (`log_id`, `log_user`, `login_date`, `log_outdate`) VALUES
(1, 0, 'Thursday 5th of March 2026 08:52:57 AM', 'pending'),
(2, 1, 'Thursday 5th of March 2026 08:53:54 AM', 'pending'),
(3, 1, 'Thursday 5th of March 2026 10:40:22 AM', 'pending'),
(4, 1, 'Thursday 5th of March 2026 12:04:03 PM', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `adm_menu_tb`
--

CREATE TABLE `adm_menu_tb` (
  `menu_id` int(11) NOT NULL,
  `menu_name` varchar(50) NOT NULL,
  `menu_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adm_menu_tb`
--

INSERT INTO `adm_menu_tb` (`menu_id`, `menu_name`, `menu_status`) VALUES
(1, 'DASHBOARD', 0),
(2, 'HR', 0),
(3, 'ACCOUNTING', 0),
(4, 'PM', 0),
(5, 'PROCUREMENT', 0),
(6, 'SUPPLIER', 0),
(7, 'STOCK', 0),
(8, 'REPORT', 0),
(9, 'SETTING', 0);

-- --------------------------------------------------------

--
-- Table structure for table `adm_month_tb`
--

CREATE TABLE `adm_month_tb` (
  `month_id` int(11) NOT NULL,
  `month_name` varchar(50) NOT NULL,
  `month_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_province_tb`
--

CREATE TABLE `adm_province_tb` (
  `province_id` int(11) NOT NULL,
  `province_name` varchar(50) NOT NULL,
  `province_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_role_tb`
--

CREATE TABLE `adm_role_tb` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_status` int(11) NOT NULL DEFAULT 0,
  `role_creationdate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_sector_tb`
--

CREATE TABLE `adm_sector_tb` (
  `sector_id` int(11) NOT NULL,
  `sector_name` varchar(50) NOT NULL,
  `sector_district` int(11) NOT NULL,
  `sector_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_staff_doc_tb`
--

CREATE TABLE `adm_staff_doc_tb` (
  `staff_doc_id` int(11) NOT NULL,
  `staff_doc_staff` int(11) NOT NULL,
  `staff_doc_name` varchar(100) NOT NULL,
  `staff_doc_creationdate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_staff_menu_tb`
--

CREATE TABLE `adm_staff_menu_tb` (
  `staffmenu_id` int(11) NOT NULL,
  `staffmenu_staff` int(11) NOT NULL,
  `staffmenu_menu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adm_staff_menu_tb`
--

INSERT INTO `adm_staff_menu_tb` (`staffmenu_id`, `staffmenu_staff`, `staffmenu_menu`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `adm_staff_project_assignhist_tb`
--

CREATE TABLE `adm_staff_project_assignhist_tb` (
  `assignhist_id` int(11) NOT NULL,
  `assignhist_staff` int(11) NOT NULL,
  `assignhist_project` int(11) NOT NULL,
  `assignhist_date` varchar(50) NOT NULL,
  `assignhist_desc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_staff_project_tb`
--

CREATE TABLE `adm_staff_project_tb` (
  `staff_project_id` int(11) NOT NULL,
  `staff_project_project` int(11) NOT NULL,
  `staff_project_staff` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adm_staff_tb`
--

CREATE TABLE `adm_staff_tb` (
  `staff_id` int(11) NOT NULL,
  `staff_firstname` varchar(50) NOT NULL,
  `staff_lastname` varchar(50) NOT NULL,
  `staff_phone` varchar(30) NOT NULL,
  `staff_idnumber` varchar(30) NOT NULL,
  `staff_bankaccount` varchar(30) NOT NULL,
  `staff_salary` double NOT NULL DEFAULT 0,
  `staff_dept` int(11) NOT NULL,
  `staff_role` int(11) NOT NULL,
  `staff_startdate` varchar(50) NOT NULL,
  `staff_enddate` varchar(50) NOT NULL,
  `staff_username` varchar(80) NOT NULL,
  `staff_password` varchar(50) NOT NULL,
  `staff_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adm_staff_tb`
--

INSERT INTO `adm_staff_tb` (`staff_id`, `staff_firstname`, `staff_lastname`, `staff_phone`, `staff_idnumber`, `staff_bankaccount`, `staff_salary`, `staff_dept`, `staff_role`, `staff_startdate`, `staff_enddate`, `staff_username`, `staff_password`, `staff_status`) VALUES
(1, 'system', 'system', 'system', 'system', 'system', 0, 1, 1, '', '', 'system', 'system', 1);

-- --------------------------------------------------------

--
-- Table structure for table `adm_village_tb`
--

CREATE TABLE `adm_village_tb` (
  `village_id` int(11) NOT NULL,
  `village_name` varchar(50) NOT NULL,
  `village_cell` int(11) NOT NULL,
  `village_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_project_task_tb`
--

CREATE TABLE `pm_project_task_tb` (
  `task_id` int(11) NOT NULL,
  `task_project` int(11) NOT NULL,
  `task_name` varchar(50) NOT NULL,
  `task_planneddate` varchar(50) NOT NULL,
  `task_complationdate` varchar(50) NOT NULL,
  `task_budget` double NOT NULL DEFAULT 0,
  `task_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pm_project_tb`
--

CREATE TABLE `pm_project_tb` (
  `project_id` int(11) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `project_code` varchar(50) NOT NULL,
  `project_contractvalue` double NOT NULL DEFAULT 0,
  `project_startdate` varchar(50) NOT NULL,
  `project_completiondate` varchar(50) NOT NULL,
  `project_duration` double NOT NULL DEFAULT 0,
  `project_durationtype` varchar(50) NOT NULL,
  `project_currentstatus` varchar(50) NOT NULL,
  `project_location` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proc_goodreceivednote_tb`
--

CREATE TABLE `proc_goodreceivednote_tb` (
  `grn_id` int(11) NOT NULL,
  `grn_po` int(11) NOT NULL,
  `grn_date` varchar(50) NOT NULL,
  `grn_supplier` int(11) NOT NULL,
  `grn_stock` int(11) NOT NULL,
  `grn_received_by` int(11) NOT NULL,
  `grn_checked_by` int(11) NOT NULL,
  `grn_status` varchar(50) NOT NULL,
  `grn_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proc_goodreceived_items_tb`
--

CREATE TABLE `proc_goodreceived_items_tb` (
  `gri_id` int(11) NOT NULL,
  `gri_grn_id` int(11) NOT NULL,
  `gri_po_item_id` int(11) NOT NULL,
  `gri_item` varchar(100) NOT NULL,
  `gri_ordered_qty` double NOT NULL DEFAULT 0,
  `gri_received_qty` double NOT NULL DEFAULT 0,
  `gri_accepted_qty` double NOT NULL DEFAULT 0,
  `gri_rejected_qty` double NOT NULL DEFAULT 0,
  `gri_unit_price` double NOT NULL DEFAULT 0,
  `gri_statusreason` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proc_purchaseorder_tb`
--

CREATE TABLE `proc_purchaseorder_tb` (
  `po_id` int(11) NOT NULL,
  `po_date` varchar(50) NOT NULL,
  `po_requisition` int(11) NOT NULL,
  `po_total_amount` double NOT NULL DEFAULT 0,
  `po_created_by` int(11) NOT NULL,
  `po_approved_by` int(11) NOT NULL,
  `po_approval_date` varchar(50) NOT NULL,
  `po_status` varchar(50) NOT NULL COMMENT 'Draft, Approved, Sent, Closed',
  `po_statusreason` varchar(150) NOT NULL,
  `po_supplier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proc_purchase_order_items_tb`
--

CREATE TABLE `proc_purchase_order_items_tb` (
  `po_item_id` int(11) NOT NULL,
  `po_item_po_id` int(11) NOT NULL,
  `po_item_requisition_item_id` int(11) NOT NULL,
  `po_item_itemname` varchar(100) NOT NULL,
  `po_item_description` varchar(150) NOT NULL,
  `po_item_qty` double NOT NULL DEFAULT 0,
  `po_item_qtyrequistioned` double NOT NULL DEFAULT 0,
  `po_item_qtyreceived` double NOT NULL DEFAULT 0,
  `po_item_unit_price` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proc_requisition_items_tb`
--

CREATE TABLE `proc_requisition_items_tb` (
  `requisition_items_id` int(11) NOT NULL,
  `requisition_items_requisition` int(11) NOT NULL,
  `requisition_items_item` varchar(100) NOT NULL,
  `requisition_items_qty` double NOT NULL DEFAULT 0,
  `requisition_items_unit` varchar(50) NOT NULL,
  `requisition_items_status` varchar(50) NOT NULL COMMENT 'Pending, Rejected,Approved, Ordered',
  `requisition_items_statusdesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proc_requisition_tb`
--

CREATE TABLE `proc_requisition_tb` (
  `requisition_id` int(11) NOT NULL,
  `requisition_date` varchar(50) NOT NULL,
  `requisition_requested_by` int(11) NOT NULL,
  `requisition_approved_by` int(11) NOT NULL,
  `requisition_approval_date` varchar(50) NOT NULL,
  `requisition_status` varchar(50) NOT NULL COMMENT ' Draft, Submitted, Approved, Rejected, Converted',
  `requisition_desc` varchar(100) NOT NULL,
  `requisition_distributiondeadline` varchar(50) NOT NULL,
  `requisition_distributedon` varchar(50) NOT NULL,
  `requisition_statusreason` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_equipmenttype_tb`
--

CREATE TABLE `stock_equipmenttype_tb` (
  `equipmenttype_id` int(11) NOT NULL,
  `equipmenttype_name` varchar(50) NOT NULL,
  `equipmenttype_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_equipment_history_tb`
--

CREATE TABLE `stock_equipment_history_tb` (
  `equipment_history_id` int(11) NOT NULL,
  `equipment_history_equipment` int(11) NOT NULL,
  `equipment_history_assignedto` int(11) NOT NULL,
  `equipment_history_project` int(11) NOT NULL,
  `equipment_history_date` varchar(50) NOT NULL,
  `equipment_history_createdby` int(11) NOT NULL,
  `equipment_history_desc` text NOT NULL,
  `equipment_history_startdate` varchar(50) NOT NULL,
  `equipment_history_enddate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_equipment_tb`
--

CREATE TABLE `stock_equipment_tb` (
  `equipment_id` int(11) NOT NULL,
  `equipment_name` varchar(100) NOT NULL,
  `equipment_type` int(11) NOT NULL,
  `equipment_project` int(11) NOT NULL,
  `equipment_responsible` int(11) NOT NULL,
  `equipment_lastrelocation` varchar(50) NOT NULL,
  `equipment_status` varchar(50) NOT NULL COMMENT 'Instock,Maintenance,Inuse',
  `equipment_ledger` int(11) NOT NULL,
  `equipment_serialnumber` varchar(50) NOT NULL,
  `equipment_brand_model` varchar(50) NOT NULL,
  `equipment_purchase Date` varchar(50) NOT NULL,
  `equipment_purchasecost` double NOT NULL DEFAULT 0,
  `equipment_lastmaintenance` varchar(50) NOT NULL,
  `equipment_nextmaintenance` varchar(50) NOT NULL,
  `equipment_condition` varchar(50) NOT NULL COMMENT 'Good,Excellent',
  `equipment_fueltype` varchar(50) NOT NULL,
  `equipment_insuranceexpiry` varchar(50) NOT NULL,
  `equipment_notes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_fuelconsumptionlog_tb`
--

CREATE TABLE `stock_fuelconsumptionlog_tb` (
  `fuelconsumptionlog_id` int(11) NOT NULL,
  `fuelconsumptionlog_equipment` int(11) NOT NULL,
  `fuelconsumptionlog_date` varchar(50) NOT NULL,
  `fuelconsumptionlog_fuelqty` double NOT NULL DEFAULT 0,
  `fuelconsumptionlog_cost` double NOT NULL DEFAULT 0,
  `fuelconsumptionlog_recordby` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acc_accountcontro_tb`
--
ALTER TABLE `acc_accountcontro_tb`
  ADD PRIMARY KEY (`accountcontro_id`);

--
-- Indexes for table `acc_accountdetails_tb`
--
ALTER TABLE `acc_accountdetails_tb`
  ADD PRIMARY KEY (`detail_id`);

--
-- Indexes for table `acc_accountgroup_tb`
--
ALTER TABLE `acc_accountgroup_tb`
  ADD PRIMARY KEY (`accountgroup_id`);

--
-- Indexes for table `acc_accounts_tb`
--
ALTER TABLE `acc_accounts_tb`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `acc_payroll_componentdetails_tb`
--
ALTER TABLE `acc_payroll_componentdetails_tb`
  ADD PRIMARY KEY (`componentdetails_id`);

--
-- Indexes for table `acc_payroll_componenttype_tb`
--
ALTER TABLE `acc_payroll_componenttype_tb`
  ADD PRIMARY KEY (`componenttype_id`);

--
-- Indexes for table `acc_payroll_component_tb`
--
ALTER TABLE `acc_payroll_component_tb`
  ADD PRIMARY KEY (`component_id`);

--
-- Indexes for table `acc_payroll_details_tb`
--
ALTER TABLE `acc_payroll_details_tb`
  ADD PRIMARY KEY (`payroll_detail_id`);

--
-- Indexes for table `acc_payroll_tb`
--
ALTER TABLE `acc_payroll_tb`
  ADD PRIMARY KEY (`payroll_id`);

--
-- Indexes for table `acc_supplier_invoice`
--
ALTER TABLE `acc_supplier_invoice`
  ADD PRIMARY KEY (`supinv_invoice_id`);

--
-- Indexes for table `acc_supplier_invoice_items`
--
ALTER TABLE `acc_supplier_invoice_items`
  ADD PRIMARY KEY (`supinv_invoice_item_id`);

--
-- Indexes for table `acc_transaction_tb`
--
ALTER TABLE `acc_transaction_tb`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `adm_auditing_tb`
--
ALTER TABLE `adm_auditing_tb`
  ADD PRIMARY KEY (`auditing_id`);

--
-- Indexes for table `adm_cells_tb`
--
ALTER TABLE `adm_cells_tb`
  ADD PRIMARY KEY (`cells_id`);

--
-- Indexes for table `adm_center_tb`
--
ALTER TABLE `adm_center_tb`
  ADD PRIMARY KEY (`center_id`);

--
-- Indexes for table `adm_company_info_tb`
--
ALTER TABLE `adm_company_info_tb`
  ADD PRIMARY KEY (`comp_id`);

--
-- Indexes for table `adm_department_tb`
--
ALTER TABLE `adm_department_tb`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `adm_district_tb`
--
ALTER TABLE `adm_district_tb`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `adm_logs_tb`
--
ALTER TABLE `adm_logs_tb`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `adm_menu_tb`
--
ALTER TABLE `adm_menu_tb`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `adm_month_tb`
--
ALTER TABLE `adm_month_tb`
  ADD PRIMARY KEY (`month_id`);

--
-- Indexes for table `adm_province_tb`
--
ALTER TABLE `adm_province_tb`
  ADD PRIMARY KEY (`province_id`);

--
-- Indexes for table `adm_role_tb`
--
ALTER TABLE `adm_role_tb`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `adm_sector_tb`
--
ALTER TABLE `adm_sector_tb`
  ADD PRIMARY KEY (`sector_id`);

--
-- Indexes for table `adm_staff_doc_tb`
--
ALTER TABLE `adm_staff_doc_tb`
  ADD PRIMARY KEY (`staff_doc_id`);

--
-- Indexes for table `adm_staff_menu_tb`
--
ALTER TABLE `adm_staff_menu_tb`
  ADD PRIMARY KEY (`staffmenu_id`);

--
-- Indexes for table `adm_staff_project_assignhist_tb`
--
ALTER TABLE `adm_staff_project_assignhist_tb`
  ADD PRIMARY KEY (`assignhist_id`);

--
-- Indexes for table `adm_staff_project_tb`
--
ALTER TABLE `adm_staff_project_tb`
  ADD PRIMARY KEY (`staff_project_id`);

--
-- Indexes for table `adm_staff_tb`
--
ALTER TABLE `adm_staff_tb`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `adm_village_tb`
--
ALTER TABLE `adm_village_tb`
  ADD PRIMARY KEY (`village_id`);

--
-- Indexes for table `pm_project_task_tb`
--
ALTER TABLE `pm_project_task_tb`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `pm_project_tb`
--
ALTER TABLE `pm_project_tb`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `proc_goodreceivednote_tb`
--
ALTER TABLE `proc_goodreceivednote_tb`
  ADD PRIMARY KEY (`grn_id`);

--
-- Indexes for table `proc_goodreceived_items_tb`
--
ALTER TABLE `proc_goodreceived_items_tb`
  ADD PRIMARY KEY (`gri_id`);

--
-- Indexes for table `proc_purchaseorder_tb`
--
ALTER TABLE `proc_purchaseorder_tb`
  ADD PRIMARY KEY (`po_id`);

--
-- Indexes for table `proc_purchase_order_items_tb`
--
ALTER TABLE `proc_purchase_order_items_tb`
  ADD PRIMARY KEY (`po_item_id`);

--
-- Indexes for table `proc_requisition_items_tb`
--
ALTER TABLE `proc_requisition_items_tb`
  ADD PRIMARY KEY (`requisition_items_id`);

--
-- Indexes for table `proc_requisition_tb`
--
ALTER TABLE `proc_requisition_tb`
  ADD PRIMARY KEY (`requisition_id`);

--
-- Indexes for table `stock_equipmenttype_tb`
--
ALTER TABLE `stock_equipmenttype_tb`
  ADD PRIMARY KEY (`equipmenttype_id`);

--
-- Indexes for table `stock_equipment_history_tb`
--
ALTER TABLE `stock_equipment_history_tb`
  ADD PRIMARY KEY (`equipment_history_id`);

--
-- Indexes for table `stock_equipment_tb`
--
ALTER TABLE `stock_equipment_tb`
  ADD PRIMARY KEY (`equipment_id`);

--
-- Indexes for table `stock_fuelconsumptionlog_tb`
--
ALTER TABLE `stock_fuelconsumptionlog_tb`
  ADD PRIMARY KEY (`fuelconsumptionlog_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acc_accountcontro_tb`
--
ALTER TABLE `acc_accountcontro_tb`
  MODIFY `accountcontro_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_accountdetails_tb`
--
ALTER TABLE `acc_accountdetails_tb`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_accountgroup_tb`
--
ALTER TABLE `acc_accountgroup_tb`
  MODIFY `accountgroup_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `acc_accounts_tb`
--
ALTER TABLE `acc_accounts_tb`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_payroll_componentdetails_tb`
--
ALTER TABLE `acc_payroll_componentdetails_tb`
  MODIFY `componentdetails_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_payroll_componenttype_tb`
--
ALTER TABLE `acc_payroll_componenttype_tb`
  MODIFY `componenttype_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `acc_payroll_component_tb`
--
ALTER TABLE `acc_payroll_component_tb`
  MODIFY `component_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_payroll_details_tb`
--
ALTER TABLE `acc_payroll_details_tb`
  MODIFY `payroll_detail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_payroll_tb`
--
ALTER TABLE `acc_payroll_tb`
  MODIFY `payroll_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_supplier_invoice`
--
ALTER TABLE `acc_supplier_invoice`
  MODIFY `supinv_invoice_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_supplier_invoice_items`
--
ALTER TABLE `acc_supplier_invoice_items`
  MODIFY `supinv_invoice_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acc_transaction_tb`
--
ALTER TABLE `acc_transaction_tb`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_auditing_tb`
--
ALTER TABLE `adm_auditing_tb`
  MODIFY `auditing_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_cells_tb`
--
ALTER TABLE `adm_cells_tb`
  MODIFY `cells_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_center_tb`
--
ALTER TABLE `adm_center_tb`
  MODIFY `center_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_company_info_tb`
--
ALTER TABLE `adm_company_info_tb`
  MODIFY `comp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `adm_department_tb`
--
ALTER TABLE `adm_department_tb`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_district_tb`
--
ALTER TABLE `adm_district_tb`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_logs_tb`
--
ALTER TABLE `adm_logs_tb`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `adm_menu_tb`
--
ALTER TABLE `adm_menu_tb`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `adm_month_tb`
--
ALTER TABLE `adm_month_tb`
  MODIFY `month_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_province_tb`
--
ALTER TABLE `adm_province_tb`
  MODIFY `province_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_role_tb`
--
ALTER TABLE `adm_role_tb`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_sector_tb`
--
ALTER TABLE `adm_sector_tb`
  MODIFY `sector_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_staff_doc_tb`
--
ALTER TABLE `adm_staff_doc_tb`
  MODIFY `staff_doc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_staff_menu_tb`
--
ALTER TABLE `adm_staff_menu_tb`
  MODIFY `staffmenu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `adm_staff_project_assignhist_tb`
--
ALTER TABLE `adm_staff_project_assignhist_tb`
  MODIFY `assignhist_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_staff_project_tb`
--
ALTER TABLE `adm_staff_project_tb`
  MODIFY `staff_project_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adm_staff_tb`
--
ALTER TABLE `adm_staff_tb`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `adm_village_tb`
--
ALTER TABLE `adm_village_tb`
  MODIFY `village_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_project_task_tb`
--
ALTER TABLE `pm_project_task_tb`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pm_project_tb`
--
ALTER TABLE `pm_project_tb`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proc_goodreceivednote_tb`
--
ALTER TABLE `proc_goodreceivednote_tb`
  MODIFY `grn_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proc_goodreceived_items_tb`
--
ALTER TABLE `proc_goodreceived_items_tb`
  MODIFY `gri_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proc_purchaseorder_tb`
--
ALTER TABLE `proc_purchaseorder_tb`
  MODIFY `po_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proc_purchase_order_items_tb`
--
ALTER TABLE `proc_purchase_order_items_tb`
  MODIFY `po_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proc_requisition_items_tb`
--
ALTER TABLE `proc_requisition_items_tb`
  MODIFY `requisition_items_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proc_requisition_tb`
--
ALTER TABLE `proc_requisition_tb`
  MODIFY `requisition_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_equipmenttype_tb`
--
ALTER TABLE `stock_equipmenttype_tb`
  MODIFY `equipmenttype_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_equipment_history_tb`
--
ALTER TABLE `stock_equipment_history_tb`
  MODIFY `equipment_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_equipment_tb`
--
ALTER TABLE `stock_equipment_tb`
  MODIFY `equipment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stock_fuelconsumptionlog_tb`
--
ALTER TABLE `stock_fuelconsumptionlog_tb`
  MODIFY `fuelconsumptionlog_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

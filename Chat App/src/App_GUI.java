import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.sql.*;

public class App_GUI extends JFrame implements ActionListener {
    JLabel l1, l2, l3, l4;
    JButton btn1;
    JTextField t1;
    JPasswordField p1;
    int x,y;

    public static void main(String[] args){
         new App_GUI(200,200);
         new App_GUI(1000,200);
    }

    App_GUI(int x, int y) {
        this.x=x;
        this.y=y;
        l1 = new JLabel("Viberzoid", SwingConstants.CENTER
        );
        l1.setFont(new Font("Serif", Font.BOLD, 70));
        l1.setForeground(Color.blue);

        l2 = new JLabel("Username:");
        l3 = new JLabel("Password:");
        btn1 = new JButton("Submit");
        t1 = new JTextField();
        p1 = new JPasswordField();

        if (x==200 && y==200){
            l4=new JLabel("Login Here For Siddhant",SwingConstants.CENTER);
            l4.setFont(new Font("Serif",Font.BOLD,30));
            l4.setForeground(Color.RED);
            l4.setBounds(100,400,400,40);
        }
        if (x==1000 && y==200){
            l4=new JLabel("Login Here For Harshil",SwingConstants.CENTER);
            l4.setFont(new Font("Serif",Font.BOLD,30));
            l4.setBounds(150,400,300,40);
            l4.setForeground(Color.RED);
        }

        l1.setBounds(100, 30, 400, 150);
        l2.setBounds(80, 170, 200, 30);
        l3.setBounds(80, 210, 200, 30);
        t1.setBounds(200, 170, 200, 30);
        p1.setBounds(200, 210, 200, 30);
        btn1.setBounds(250, 300,100,30);

        btn1.addActionListener(this);

        add(l1);
        add(l2);
        add(t1);
        add(l3);
        add(p1);
        add(btn1);
        add(l4);

        setResizable(false);
        setTitle("Login Page");
        setLayout(null);
        setSize(600, 600);
        setVisible(true);
        setLocation(x,y);
        setBackground(Color.green);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    @Override
    public void actionPerformed(ActionEvent e){

        Databases();

    }
    public void Databases(){
        String Username = t1.getText();
        String str = p1.getText();

        String Password=new String(str);
        try{
            String url = "jdbc:mysql://localhost:3306/siddhant";
            String un = "root";
            String pass = "user#123";
            String query = "select * from Viberzoid";
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(url,un,pass);
            PreparedStatement st=con.prepareStatement("select Username from Viberzoid where Password=?");
            PreparedStatement st1=con.prepareStatement("select Password from Viberzoid where Username=?");
            ResultSet rs = st.executeQuery(query);
            ResultSet rs1 = st1.executeQuery(query);

            String[] username = new String[2];
            String[] password = new String[2];
            for (int i=0;i<2;i++){
                rs.next();
                String U=rs.getString("Username");

                username[i]=U;
            }
            for (int j=0;j<2;j++){
                rs1.next();
                String P=rs1.getString("Password");
                password[j]=P;
            }
            if (Username.equalsIgnoreCase(username[0]) && Password.equals(password[0]) && x==200 && y==200 ){
                try {
                    GUI2 gui2=new GUI2();
                    Runnable r=new Runnable() {
                        @Override
                        public void run() {
                            gui2.Connection();
                        }
                    };
                    new Thread(r).start();
                }
                catch (IOException ex){
                    ex.printStackTrace();
                }
                setVisible(false);
            }
            else if (Username.equalsIgnoreCase(username[1]) && Password.equals(password[1]) && x==1000 && y==200){
                try {
                    GUI3 gui3=new GUI3();
                    Runnable r= gui3::Connection;
                    new Thread(r).start();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
                setVisible(false);
            }
            else if (Username.equalsIgnoreCase(username[1]) && Password.equals(password[1]) && x==200 && y==200){
                JOptionPane.showMessageDialog(this, "Login For Different Username Not Allowed", "ERROR", JOptionPane.ERROR_MESSAGE);
                p1.setText("");
                t1.setText("");
            }
            else if (Username.equalsIgnoreCase(username[0]) && Password.equals(password[0]) && x==1000 && y==200){
                JOptionPane.showMessageDialog(this, "Login For Different Username Not Allowed", "ERROR", JOptionPane.ERROR_MESSAGE);
                p1.setText("");
                t1.setText("");
            }
            else {
                JOptionPane.showMessageDialog(this, "Incorrect Username or Password", "ERROR", JOptionPane.ERROR_MESSAGE);
                p1.setText("");
                t1.setText("");
            }
            st.close();
            con.close();
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
    }
}
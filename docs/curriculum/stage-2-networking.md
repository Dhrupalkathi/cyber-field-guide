# Stage 2 — Networking

**Level:** Beginner to developing learner  
**Audience:** Everyone beginning technical cybersecurity foundations  
**Prerequisites:** Stage 1 — Computer Fundamentals recommended; basic comfort using a computer  
**Required operating system:** None  
**Required specialist tools:** None  
**Purpose:** Understand how computers and other devices communicate, how traffic moves across local and remote networks, and how to reason about network behaviour before using network-security tools.

Networking is first in Stage 2 because operating systems, web applications, cloud platforms, security tools, and defensive monitoring all depend on network communication. You should be able to explain what a device is doing on a network before attempting to configure or assess one.

## How to learn this stage

### AI-guided learning — explore the topic you choose

Choose any topic in this stage and ask an AI assistant to act as a patient networking tutor. Ask it to explain the idea in plain language, draw a labelled text diagram, compare two related concepts, walk through a fictional network scenario, or simulate what happens when a device sends data. You can ask it to pause after each step and adapt the explanation to your answers.

You can start with this prompt:

> I am learning CINS Stage 2 — Networking. I have completed beginner computer fundamentals, but I am still new to networking. Teach me **[topic]** from first principles. Explain each term before using it, draw a simple labelled diagram, and use a realistic fictional example. Ask me questions to check my understanding and correct misconceptions. Keep the explanation within the Networking part of Stage 2. Do not assume I use Kali Linux, do not ask me to scan or test a real network, and do not require paid software. Link important technical claims to official standards or documentation.

AI-generated explanations and commands can be wrong or out of date. Verify important facts against the references at the end of this page. Do not run a command unless you understand what it reads or changes. Do not share passwords, network credentials, private network diagrams, personal records, or confidential material with an AI service.

**Publishing what you learn:** Once you understand and verify a topic, you may prepare your own explanation, annotated diagram, glossary, comparison, or reference note and submit it to the CINS repository. A human review must check technical accuracy, clarity, safe scope, privacy, accessibility, and source attribution before publication. Do not publish raw, unverified AI output.

## Stage 2 Networking: exit outcomes

By the end of this part of Stage 2, a student should be able to:

1. Explain what a computer network is and distinguish a local network from a wide-area network and the public Internet.
2. Identify the purpose of common network components, including a network interface, switch, access point, router, modem/ONT, firewall, and server.
3. Describe the OSI reference model and TCP/IP model as ways to reason about communication, without treating them as exact maps of every real protocol.
4. Explain the difference between a MAC address and an IP address, and describe how local delivery and routing differ.
5. Read a basic IPv4 address with a prefix, recognise private IPv4 ranges, and explain the purpose of a subnet.
6. Recognise the structure and purpose of IPv6 addresses and explain why IPv6 is not simply a longer IPv4 address.
7. Explain at a high level how DHCP provides network configuration and how DNS resolves names to records.
8. Explain what a default gateway, routing table, NAT, and network segmentation do.
9. Compare TCP and UDP, explain what a port represents, and recognise common network services.
10. Explain the basic operation and security of Wi-Fi, firewalls, VPNs, and network segmentation.
11. Use basic, non-destructive commands to inspect their own device's network configuration and reason about simple connectivity problems.
12. Explain the journey of a packet through a local network and across interconnected networks.

## Module 2.1 — What is a network?

### Why it matters

A network lets devices exchange information and share services. A laptop reaching a college portal, a phone printing to a local printer, a server sending a log to a monitoring platform, and a cloud service receiving an API request all rely on networking.

### Topics

- **Network:** two or more devices connected so they can exchange data or share resources.
- **Host / endpoint:** a device or system that sends or receives network communication.
- **Client and server:** a client requests a service; a server provides it. One system can act as both in different conversations.
- **Peer-to-peer:** devices communicate more directly without a single central server providing every function.
- **Network interface:** the hardware or virtual interface through which a device connects, such as Ethernet or Wi-Fi.
- **Network types:** PAN (personal), LAN (local), WLAN (wireless local), and WAN (wide-area). The Internet is a global network of interconnected networks; it is not the same thing as the Web.
- **Physical and logical topology:** the physical connections and the logical paths or relationships used for communication.
- **Common physical/logical layouts:** star (devices connect through a central switch or access point), point-to-point (a direct link between two endpoints), and mesh (multiple interconnections that can provide alternate paths). A logical star can be built over physical infrastructure that is more complex; describe the topology being discussed.
- **Network performance:** bandwidth/capacity, throughput, latency, jitter, and packet loss. These describe different properties; high advertised bandwidth does not guarantee low latency or a stable connection.
- **Standards and protocols:** agreed rules that allow equipment and software from different vendors to communicate.

### Common network components

| Component | Main purpose |
|---|---|
| Network interface (NIC) | Connects a device to Ethernet, Wi-Fi, or another network medium. |
| Switch | Connects devices in a local wired network and forwards Ethernet frames using MAC-address information. |
| Wireless access point (AP) | Connects Wi-Fi devices to a local network. |
| Router | Connects different IP networks and forwards packets using routing information. |
| Modem or optical network terminal (ONT) | Connects a customer's network to an ISP access technology; the exact device depends on the connection type. |
| Firewall | Applies traffic rules to permit, restrict, or inspect network communication. |
| Server | Runs a service that other devices or applications use. |

A home gateway may combine a router, switch, Wi-Fi access point, and firewall in one physical box. In a college or enterprise network, those roles may be provided by separate devices and systems.

### Learning outcomes

A student can explain why two devices need compatible protocols, distinguish a switch from a router and an access point, give examples of LAN/WLAN/WAN, and explain why bandwidth and latency are not interchangeable.

## Module 2.2 — How network communication is organised

### Why it matters

Networking involves many cooperating technologies. Layered models make it easier to understand where a function belongs and to narrow down where a communication problem may occur.

### The OSI reference model

The OSI model is a seven-layer reference model. It is useful vocabulary for discussing network functions:

| OSI layer | Name | Main idea | Familiar examples |
|---|---|---|---|
| 7 | Application | Services used by applications | DNS, HTTP, SMTP |
| 6 | Presentation | Data representation, encoding, and transformations | Character encoding, data formats, encryption concepts |
| 5 | Session | Managing a logical conversation or session | Session-control concepts in application protocols |
| 4 | Transport | Communication between application processes | TCP, UDP |
| 3 | Network | Logical addressing and forwarding between networks | IP, ICMP |
| 2 | Data Link | Delivery across one local link | Ethernet, Wi-Fi MAC |
| 1 | Physical | Signals and the medium carrying bits | Copper, fibre, radio |

The OSI model is a learning and troubleshooting reference. Real Internet protocols do not always fit neatly into one box; Layers 5 and 6 are often handled within application protocols or libraries.

### The TCP/IP model

A common four-layer view of the Internet protocol suite is:

| TCP/IP layer | Responsibility | Examples |
|---|---|---|
| Application | Application-level communication | DNS, HTTP, SSH, SMTP |
| Transport | Process-to-process delivery | TCP, UDP |
| Internet | Logical addressing and packet forwarding | IPv4, IPv6, ICMP |
| Link / Network Access | Communication over the local medium | Ethernet, Wi-Fi |

Some learning materials split the link layer into separate data-link and physical layers. The important idea is the separation of responsibilities, not memorising one diagram as the only valid model.

### Encapsulation: how data is wrapped

As data moves down the protocol stack, each layer adds information needed by the next part of the journey. The receiver processes the information in the reverse direction. The exact headers depend on the protocols being used.

<div class="cins-net-figure">
  <div class="cins-net-figure-heading">A simplified view of encapsulation</div>
  <div class="cins-net-stack" role="img" aria-label="Application data is carried in a TCP segment or UDP datagram, then an IP packet, then a local network frame, and finally transmitted as signals or bits.">
    <div class="cins-net-layer cins-net-layer-app"><strong>Application data</strong><span>What the application wants to send</span></div>
    <div class="cins-net-layer cins-net-layer-transport"><strong>TCP segment / UDP datagram</strong><span>Transport ports and transport information</span></div>
    <div class="cins-net-layer cins-net-layer-internet"><strong>IP packet</strong><span>Source and destination IP addresses</span></div>
    <div class="cins-net-layer cins-net-layer-link"><strong>Ethernet / Wi-Fi frame</strong><span>Local-link addressing and frame information</span></div>
    <div class="cins-net-layer cins-net-layer-physical"><strong>Bits and signals</strong><span>Electrical, optical, or radio transmission</span></div>
  </div>
  <div class="cins-net-figure-caption">Simplified teaching model. A real packet may include additional headers, options, or security layers.</div>
</div>

Important distinctions:

- A **frame** is associated with a local link. When a router forwards traffic to another link, it normally creates a new link-layer frame for that next hop.
- The **IP packet** carries source and destination IP addresses used for forwarding across networks. NAT can translate addresses and related fields at a network boundary.
- A **TCP segment** or **UDP datagram** carries transport information, including port numbers.
- The application data is interpreted by the relevant application protocol.

### Learning outcomes

A student can state the purpose of the four TCP/IP layers, match familiar protocols to their broad layer, explain encapsulation and decapsulation, and explain why a router forwards packets while a switch forwards local-link frames.

## Module 2.3 — Ethernet, MAC addresses, switching, and local delivery

### Topics

- **Ethernet:** a widely used family of wired local-network technologies.
- **Frame:** the data-link unit used to deliver data across an Ethernet link.
- **MAC address:** a link-layer address used on a local network. Ethernet MAC addresses are commonly represented as six hexadecimal octets, for example **00:1A:2B:3C:4D:5E**.
- **Switch learning:** an Ethernet switch learns which source MAC addresses are reachable through its ports and uses that information when forwarding frames.
- **Unicast, broadcast, and multicast:** broad delivery patterns. Broadcast reaches devices in the relevant broadcast domain; multicast targets a group; unicast targets one destination.
- **ARP (Address Resolution Protocol):** on IPv4 Ethernet networks, ARP helps discover the link-layer address associated with an IPv4 address on the local link.
- **IPv6 neighbour discovery:** IPv6 uses ICMPv6 Neighbour Discovery rather than ARP.
- **VLAN (Virtual LAN):** a way to create separate logical Layer 2 networks on supported infrastructure. VLANs can support segmentation, but they require correct configuration and suitable routing and access controls.
- **Wireless local delivery:** Wi-Fi uses its own link-layer framing and access-point behaviour; it is related to Ethernet but not identical to wired Ethernet.

### MAC address versus IP address

| MAC address | IP address |
|---|---|
| Used for delivery on a local link. | Used for logical addressing across IP networks. |
| Associated with a network interface and link technology. | Assigned or configured for an interface on an IP network. |
| Usually not used by routers as an end-to-end Internet destination. | Used by routers to forward packets between networks. |
| Can change or be locally administered; it should not be treated as an identity or proof of trust. | Can change when a device joins another network or receives a different configuration. |

A router does not forward a frame unchanged across the whole Internet. It receives a frame on one interface, examines the IP packet, chooses a next hop, and sends the packet in a new frame on the outgoing link.

### Learning outcomes

A student can identify the format of a common Ethernet MAC address, explain the basic job of a switch, explain when a device needs to resolve a local next-hop address, distinguish ARP for IPv4 from IPv6 Neighbour Discovery, and explain why MAC addresses are not a substitute for IP routing or strong authentication.

## Module 2.4 — IP addressing: IPv4, IPv6, and subnetting foundations

### Why it matters

IP addresses let devices identify network interfaces for communication across interconnected networks. Without logical addressing and a way to decide where packets should go, routers could not forward traffic between networks.

### IPv4 fundamentals

- IPv4 addresses contain 32 bits and are commonly written as four decimal octets, such as **192.168.10.25**.
- A **prefix length** tells us how many leading bits identify the network portion of an address. For example, **/24** means 24 network bits and 8 host bits.
- A subnet mask is another way to represent the network portion. **255.255.255.0** corresponds to **/24**.
- CIDR notation writes an address with its prefix, such as **192.168.10.25/24**.
- A host's address must be interpreted together with its prefix; the dotted address alone does not tell the whole network story.
- Older classful address categories are historical. Modern network planning uses classless addressing and prefixes.

### Private IPv4 ranges

The following three ranges are reserved for private internets by RFC 1918:

| Private block | Prefix | Common context |
|---|---|---|
| **10.0.0.0 – 10.255.255.255** | **10.0.0.0/8** | Larger private networks |
| **172.16.0.0 – 172.31.255.255** | **172.16.0.0/12** | Private networks |
| **192.168.0.0 – 192.168.255.255** | **192.168.0.0/16** | Common in home and small networks |

Private addresses are not globally routed as public Internet destinations. A device using a private address can still reach public services through a gateway, often using network address translation. A private address does **not** mean a device is automatically secure or unreachable from every other device.

Other useful IPv4 ranges to recognise:

- **127.0.0.0/8** — loopback; **127.0.0.1** refers to the local host.
- **169.254.0.0/16** — IPv4 link-local addressing, often seen when normal configuration is unavailable. It is not a replacement for a working gateway or DHCP configuration.

### Subnetting at an introductory level

A subnet is a logical division of an IP network. The prefix length determines how many bits identify the network and how many remain for addresses within it.

| Example prefix | Network bits | Remaining address bits | Total IPv4 addresses |
|---|---:|---:|---:|
| **/24** | 24 | 8 | 256 |
| **/26** | 26 | 6 | 64 |
| **/16** | 16 | 16 | 65,536 |

For many familiar IPv4 subnets, one address identifies the network and one is the directed broadcast address, leaving fewer addresses for ordinary hosts. Special cases such as **/31** and **/32** have different uses, so do not apply the familiar host-count shortcut to every prefix.

For example, **192.168.10.21/24** and **192.168.10.45/24** are in the same **192.168.10.0/24** subnet. **192.168.20.8/24** is in a different subnet. The prefix is what makes that comparison possible.

For a conventional **192.168.10.0/24** IPv4 subnet:

- **192.168.10.0** is the network address.
- **192.168.10.255** is the directed broadcast address.
- **192.168.10.1–192.168.10.254** are the conventional host addresses available for assignment.

This is a worked example for a normal subnet, not a universal rule for every prefix. Point-to-point **/31** networks are a special case and do not reserve a directed broadcast address in the usual way.

At this stage, understand what a prefix means and be comfortable with common examples such as **/24**. Detailed subnet design and repeated manual subnet calculations can be developed later when they are needed.

### IPv6 fundamentals

- IPv6 addresses contain 128 bits and are written as hexadecimal groups separated by colons, for example **2001:db8:1234:1::25**.
- Consecutive zero groups can be compressed using **::** once in an address.
- A prefix length is written after a slash, such as **/64**.
- IPv6 provides a much larger address space and supports modern address configuration and neighbour-discovery mechanisms.
- IPv6 does not use broadcast addressing; it uses multicast and other defined mechanisms.
- Common ranges to recognise include:
  - **::1** — IPv6 loopback.
  - **fe80::/10** — link-local unicast.
  - **fc00::/7** — unique-local address space.
  - **2000::/3** — global unicast allocation space in the current addressing architecture.
- IPv6 configuration may use Stateless Address Autoconfiguration (SLAAC), DHCPv6, or a combination depending on the network.

### Learning outcomes

A student can read a basic IPv4 address and prefix, identify the three RFC 1918 private IPv4 ranges, explain what a **/24** prefix means, recognise loopback and IPv4 link-local addresses, recognise the general format of IPv6, and explain why private addressing is not the same as network security.

## Module 2.5 — DHCP, DNS, gateways, routing, and NAT

These services and functions work together, but they solve different problems.

### DHCP — obtaining network configuration

The Dynamic Host Configuration Protocol (DHCP) allows a device to obtain network configuration from a DHCP server. Commonly supplied information includes an IP address and subnet mask or prefix, a lease duration, a default gateway, one or more DNS resolvers, and other network options where required.

A familiar IPv4 DHCP exchange is often taught as **DORA**:

1. **Discover:** the client looks for a DHCP server.
2. **Offer:** a server offers configuration.
3. **Request:** the client requests the offered configuration.
4. **Acknowledgement:** the server confirms the lease.

The exchange is a useful mental model, not a promise that every environment uses the exact same visible sequence in every situation.

### DNS — translating names into records

The Domain Name System (DNS) is a distributed, hierarchical naming system. It lets applications look up records associated with names instead of requiring people to remember numeric addresses.

Important ideas:

- A **stub resolver** on a device sends queries to a configured DNS resolver.
- A **recursive resolver** works to obtain an answer, often using cached data.
- **Authoritative name servers** provide the records for the DNS zones they serve.
- DNS responses can contain different record types. Common examples include:
  - **A** — IPv4 address.
  - **AAAA** — IPv6 address.
  - **CNAME** — alias to another DNS name.
  - **MX** — mail-exchange information.
  - **TXT** — text data used by several services.
  - **NS** — name-server information.
  - **PTR** — reverse-lookup information.
- DNS commonly uses UDP port 53, and TCP port 53 is also used in defined situations. Encrypted DNS transports such as DNS over HTTPS and DNS over TLS exist, but they do not change the basic purpose of name resolution.

DNS does not mean "the Internet". An application may use cached data, a local name, a resolver other than the operating system's default, or an address directly.

### Default gateway and routing

- A **default gateway** is the next-hop router a host uses when it has no more specific route for a destination.
- A **routing table** contains destination prefixes and the information used to choose an outgoing interface and/or next hop.
- A router examines the destination IP address, consults its forwarding information, and sends the packet towards the next hop.
- When several routing-table entries match a destination, routers normally use **longest-prefix match**: the most specific matching route (the one with the most leading network bits) wins. A default route such as **0.0.0.0/0** is the least-specific fallback when no more-specific route matches.
- Routers do not need to know the complete end-to-end path. Each router makes a forwarding decision for the next step.
- **Traceroute** tools infer parts of a path using responses to probes; results can be incomplete because networks may filter or deprioritise those probes.

### NAT — network address translation

Network Address Translation (NAT) changes address information as traffic crosses a network boundary. In common home IPv4 networks, many private devices share one public IPv4 address using a form of address and port translation, often called PAT or NAPT.

Keep these distinctions clear:

- NAT is an address-translation function, not an encryption method.
- NAT is not the same thing as a firewall.
- NAT can affect which inbound connections are reachable, but security still depends on firewall rules, service exposure, device configuration, and other controls.
- IPv6 networks may use different addressing and security designs; do not assume every network uses IPv4-style NAT.

### Learning outcomes

A student can explain the purpose of DHCP and identify the DORA stages, describe the role of a recursive DNS resolver and authoritative server, explain why a host needs a default gateway to reach another network, read the basic purpose of a routing-table entry, and explain what NAT changes and why NAT alone is not a security strategy.

## Module 2.6 — TCP, UDP, ports, and common services

### Transport protocols

**TCP (Transmission Control Protocol)** provides a reliable, ordered byte-stream service between application endpoints. It uses sequence information, acknowledgements, and retransmission to recover from loss. TCP is connection-oriented and normally establishes a connection before application data is exchanged.

A TCP three-way handshake is commonly represented as:

<div class="cins-net-figure">
  <div class="cins-net-figure-heading">TCP connection establishment</div>
  <div class="cins-net-handshake" role="img" aria-label="Client sends SYN to server, server replies SYN ACK, and client completes the handshake with ACK.">
    <div class="cins-net-peer"><strong>Client</strong><span>Initiates connection</span></div>
    <div class="cins-net-exchange">
      <div class="cins-net-message"><span class="cins-net-message-label">SYN</span><span class="cins-net-message-line"></span><span class="cins-net-message-note">Client → Server</span></div>
      <div class="cins-net-message reverse"><span class="cins-net-message-label">SYN–ACK</span><span class="cins-net-message-line"></span><span class="cins-net-message-note">Server → Client</span></div>
      <div class="cins-net-message"><span class="cins-net-message-label">ACK</span><span class="cins-net-message-line"></span><span class="cins-net-message-note">Client → Server</span></div>
    </div>
    <div class="cins-net-peer"><strong>Server</strong><span>Accepts connection</span></div>
  </div>
  <div class="cins-net-figure-caption">Conceptual handshake. It establishes TCP connection state; it does not by itself authenticate the user or encrypt application data.</div>
</div>

**UDP (User Datagram Protocol)** provides datagram delivery with minimal transport-level mechanisms. UDP does not itself guarantee delivery, ordering, or duplicate protection. Applications choose it when they need its characteristics and may implement additional reliability or congestion handling themselves.

**QUIC** is a modern transport protocol built on UDP. It provides connection and security features used by HTTP/3. This is an example of why "UDP is always unreliable" is too simplistic: UDP itself makes limited guarantees, while a higher-level protocol can add more behaviour.

### Ports and sockets

- A **port number** helps identify the application service or process associated with transport traffic on a host.
- TCP and UDP have separate port spaces.
- Port numbers are 16-bit values, from **0 to 65,535**.
- A server commonly listens on a known port. A client commonly uses a temporary (ephemeral) source port for its side of a connection.
- A **socket** is an endpoint used by software for network communication; it is associated with transport and addressing information.
- A port number does not prove that a service is running, exposed to the Internet, vulnerable, or even using the expected software. Configuration and context matter.

### Common ports to recognise

| Port | Transport | Common service or use |
|---:|---|---|
| 22 | TCP | SSH remote administration |
| 25 | TCP | SMTP mail transfer |
| 53 | UDP and TCP | DNS |
| 67 / 68 | UDP | DHCPv4 server / client |
| 80 | TCP | HTTP |
| 123 | UDP | NTP time synchronisation |
| 443 | TCP; UDP for QUIC-based HTTP/3 | HTTPS / HTTP over TLS or QUIC |
| 587 | TCP | Message submission |
| 3389 | Commonly TCP and UDP | Remote Desktop Protocol |

This is a recognition list, not a complete port catalogue. Always check the service's actual configuration and the current IANA registry when precision matters. A service can be configured on a non-default port.

### Learning outcomes

A student can compare TCP and UDP without describing one as universally better, explain the broad purpose of the TCP handshake, explain the difference between an IP address and a port, distinguish a server listening port from a client's temporary source port, and recognise common services while avoiding assumptions based only on a port number.

## Module 2.7 — Wireless networking and network security building blocks

### Wi-Fi fundamentals

- Wi-Fi is a family of wireless LAN technologies based on IEEE 802.11.
- An **SSID** is the network name presented to users. A **BSSID** identifies a particular basic service set/access-point radio interface.
- The 2.4 GHz, 5 GHz, and 6 GHz bands have different capabilities, range characteristics, and regional/device availability.
- Signal strength, interference, channel selection, obstacles, client capability, and access-point placement can affect performance.
- An access point bridges wireless clients into a local network; a wireless router often combines this role with routing and firewall functions.
- Authentication controls who can join; encryption protects wireless traffic over the air.

### Wireless security

For a network you own or administer, prefer WPA3 where supported, or WPA2 with modern AES-based protection where WPA3 is unavailable. Avoid obsolete WEP and original WPA configurations. Use a strong, unique Wi-Fi passphrase, change default router administration credentials, keep router firmware updated, and review remote-management and convenience features rather than leaving unnecessary features enabled.

A guest network can separate visitors or less-trusted devices from primary devices when the router supports appropriate isolation. A separate SSID alone does not prove that traffic is isolated; the network configuration must enforce the separation.

### Core network security concepts

| Concept | Purpose |
|---|---|
| Firewall | Enforces rules about which network traffic is allowed or blocked. |
| Stateful inspection | Tracks connection state to make rules more context-aware. |
| Network segmentation | Separates systems or groups to limit unnecessary communication and contain incidents. |
| VLAN | Creates a logical Layer 2 separation on supporting network equipment; routing and access controls are still required between VLANs. |
| VPN | Creates an authenticated, protected tunnel across an untrusted or separate network; it does not make a user anonymous or automatically secure an endpoint. |
| Proxy | Makes requests or forwards traffic on behalf of a client or service; behaviour depends on the proxy type and configuration. |
| IDS / IPS | Detects suspicious activity, and in the IPS case may also take configured prevention actions. |
| Network monitoring and logs | Provide visibility into communication patterns, service health, and potential security events. |

### Threats to recognise

At an introductory level, understand what these terms mean and what kinds of controls can reduce the risk:

- Eavesdropping on traffic that is not adequately protected.
- Address or identity spoofing, where an attacker falsifies information to impersonate another endpoint.
- Rogue or impersonated wireless access points.
- Unauthorised access to exposed services.
- Denial-of-service and resource exhaustion.
- Lateral movement between systems that can communicate too freely.
- Misconfiguration, weak credentials, outdated firmware, and unnecessary exposed services.

The goal here is to recognise the problem and understand defensive principles—not to practise attacks against a real network. Detailed offensive network testing and specialist packet analysis belong in later authorised learning environments.

### Learning outcomes

A student can explain the roles of an SSID, access point, authentication, and wireless encryption; compare WPA2 and WPA3 at a high level; explain how a firewall differs from NAT; explain why segmentation needs enforcement, not just different network names; and describe what a VPN does and common misconceptions about it.

## Module 2.8 — Network troubleshooting and basic observation

### A layered troubleshooting approach

When a connection fails, avoid guessing and changing several settings at once. Narrow down the problem in a repeatable order:

1. **Define the scope:** Is one device affected, several devices, one application, or every service?
2. **Check the local connection:** Is Ethernet connected or is Wi-Fi associated with the expected network?
3. **Inspect the interface:** Does the device have an active interface and a plausible IP address?
4. **Inspect IP configuration:** Is the prefix/mask sensible? Is a default gateway present when one is needed?
5. **Check local reachability:** Can the device communicate with the appropriate local gateway or another approved local endpoint?
6. **Check name resolution:** Does DNS return an answer for the name being used?
7. **Check the route and destination:** Does the route appear reasonable, and is the intended destination reachable?
8. **Check the service:** Is the service listening and permitted by the relevant firewall or network policy?
9. **Record evidence:** Note the time, device, network, exact error, commands used, and results. Remove private details before sharing the record.

A failed ping does not prove that a host is offline: firewalls and network policies may block ICMP. A successful ping does not prove that a particular application or port is working. Use each diagnostic result only for what it actually tests.

### Basic commands for your own device

These commands are for observing your own machine's network configuration or making ordinary diagnostic requests. Some send packets to another system. Use them only on a network where such diagnostics are allowed, and use destinations approved by the network owner or lab. Do not scan a college, public, or third-party network.

| Purpose | Windows (PowerShell or Command Prompt) | Linux | macOS |
|---|---|---|---|
| View interface addresses | **ipconfig /all** or **Get-NetIPConfiguration** | **ip address show** | **ifconfig** |
| View routing information | **route print** | **ip route show** | **netstat -rn** |
| View local neighbour/ARP information | **arp -a** | **ip neigh show** | **arp -a** |
| Check DNS resolution | **nslookup example.com** | **getent hosts example.com** or **dig example.com** | **dig example.com** or **scutil --dns** to inspect resolver configuration |
| Trace a route | **tracert example.com** | **traceroute example.com** or **tracepath example.com** if installed | **traceroute example.com** |
| Check a TCP service | **Test-NetConnection example.com -Port 443** | Use an approved client diagnostic such as **curl -I https://example.com** when HTTP testing is in scope | Use an approved client diagnostic such as **curl -I https://example.com** when HTTP testing is in scope |
| Inspect local sockets | **Get-NetTCPConnection** | **ss -tuln** | **lsof -i -n -P** (if available) |

Replace **example.com** with a destination approved for your learning environment. Tool availability and output vary by operating-system version and installed packages. **dig**, **traceroute**, and **lsof** may not be installed by default on every system. Do not install extra tools just to complete this stage.

Useful interpretation points:

- An address beginning **169.254** on IPv4 often indicates that automatic address configuration did not complete as expected; investigate DHCP and the local link rather than treating it as a normal Internet-routable address.
- A missing or unexpected default route can explain why off-subnet destinations cannot be reached.
- If an IP address is reachable but a name is not resolving, investigate DNS separately.
- If DNS resolves but a service connection fails, consider routing, firewall policy, the destination service, and the selected transport/port.
- A route trace may show timeouts at intermediate hops even when the final service works. Intermediate routers may not answer those probes.

### Boundaries

Do not change IP addresses, DNS settings, routes, firewall rules, switch/VLAN settings, router settings, or wireless configuration on college or organisational infrastructure unless an authorised administrator has explicitly asked you to do so. Do not run port scans, packet-capture sessions, password attacks, deauthentication tests, or stress tests as part of this beginner stage. Those activities require a separately authorised scope, suitable environment, and appropriate supervision.

### Learning outcomes

A student can choose a relevant diagnostic command for a specific question, explain what an output does and does not establish, separate a local configuration problem from a name-resolution or service problem, and record concise troubleshooting evidence without publishing private network information.

## Module 2.9 — Put the concepts together: a device reaching a service

Consider a fictional student laptop opening a service by domain name. This scenario combines the concepts from the stage; it is a simplified model, because real networks may use caches, proxies, encrypted DNS, VPNs, multiple access points, and other components.

<div class="cins-net-figure">
  <div class="cins-net-figure-heading">A simplified packet journey</div>
  <div class="cins-net-route" role="img" aria-label="A laptop sends data through a local Wi-Fi access point or Ethernet switch, then a router or default gateway, across the ISP and intermediate networks, to a destination network and server.">
    <div class="cins-net-node"><span class="cins-net-node-icon">01</span><strong>Device</strong><small>Application, IP address, source port</small></div>
    <div class="cins-net-link"><span class="cins-net-packet"></span></div>
    <div class="cins-net-node"><span class="cins-net-node-icon">02</span><strong>Local link</strong><small>Wi-Fi AP or Ethernet switch</small></div>
    <div class="cins-net-link"><span class="cins-net-packet"></span></div>
    <div class="cins-net-node"><span class="cins-net-node-icon">03</span><strong>Gateway</strong><small>Router selects the next hop</small></div>
    <div class="cins-net-link"><span class="cins-net-packet"></span></div>
    <div class="cins-net-node"><span class="cins-net-node-icon">04</span><strong>Other networks</strong><small>ISP and intermediate routers</small></div>
    <div class="cins-net-link"><span class="cins-net-packet"></span></div>
    <div class="cins-net-node"><span class="cins-net-node-icon">05</span><strong>Destination</strong><small>Destination network and server</small></div>
  </div>
  <div class="cins-net-figure-caption">The access point, switch, and router may be separate devices or combined in one gateway. Real routes may contain more hops than shown.</div>
</div>

A useful mental sequence is:

1. The device already has, or obtains, network configuration such as an IP address, prefix, default gateway, and DNS resolver.
2. The application needs an address for the name it is using. A resolver may answer from cache or perform DNS lookups.
3. The operating system checks whether the destination is on the local subnet. If it is remote, the device normally sends the packet towards its default gateway.
4. For local delivery to the next hop, the device needs the relevant link-layer address. IPv4 Ethernet commonly uses ARP; IPv6 uses Neighbour Discovery.
5. The device places the data in the relevant transport and IP structures, then in a local-link frame.
6. The router receives the frame, processes the IP packet, selects a next hop, and forwards it in a new link-layer frame. This process can repeat across multiple networks.
7. The destination host receives the traffic and passes it to the appropriate transport endpoint and application service, subject to routing and security controls.
8. The response travels back through the network according to the routes and policies in effect. The return path does not have to be identical.

The browser's HTTP behaviour, TLS details, cookies, sessions, and APIs are taught in the later **Internet and Web Fundamentals** part of Stage 2. This page establishes the network concepts needed to understand those subjects.

## What is intentionally deferred?

To keep the agreed Stage 2 order clear:

- **Linux administration:** command-line workflows, files, permissions, users, processes, services, and logs are taught in the Linux part of Stage 2.
- **Windows administration:** PowerShell workflows, Windows services, accounts, event logs, and system configuration are taught in the Windows part of Stage 2.
- **Internet and Web fundamentals:** HTTP methods, requests and responses, TLS in web use, cookies, sessions, browser behaviour, and APIs are taught after the networking foundation.
- **Specialist security work:** port scanning, packet capture, traffic analysis, IDS/IPS deployment, firewall engineering, routing-protocol configuration, wireless security testing, and exploitation are reserved for later stages and authorised labs.

## How Networking connects to the rest of the curriculum

| Later subject | Networking knowledge it builds on |
|---|---|
| Stage 2 — Linux | Interfaces, addresses, routes, DNS, sockets, and service communication. |
| Stage 2 — Windows | Network configuration, name resolution, connectivity checks, and local services. |
| Stage 2 — Internet and Web | IP, routing, DNS, transport, ports, and client/server communication. |
| Stage 3 — Cybersecurity Core | Security boundaries, exposed services, network controls, protocols, and monitoring concepts. |
| Stage 4 — Domain Exploration | Defensive monitoring, network security, authorised testing, cloud networking, and incident investigation. |
| Stage 5 — Specialisation | Deeper network engineering, security architecture, protocol analysis, and specialist research where relevant. |

## Recommended learning resources

Use the [Networking Resources directory](../resources/networking.md) for the full descriptions, access details, and review notes.

- [Cisco Networking Academy — Networking Basics](../resources/networking.md#networking-course): a beginner course that covers network devices, protocols, Ethernet, IPv4, IPv6, routing, troubleshooting, and wireless networking.
- [TryHackMe — Pre Security](../resources/networking.md#cross-stage-resource-introductory-computing-security-and-networking): use only the selected networking sections mapped to this stage; its other sections belong to other CINS stages.
- [Bitten Tech and NetworkChuck](../resources/networking.md#networking-video-supplements): optional video supplements. Choose videos that match the current module and verify version-sensitive details.

These resources support the CINS curriculum; their course order does not replace the sequence on the Curriculum page.

## Official references and technical documentation

These are reference sources, not additional required courses. Use introductory explanations first and consult standards when you need precise protocol behaviour.

### Standards and registries

- [RFC 1918 — Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918): the reserved private IPv4 ranges.
- [RFC 8200 — Internet Protocol, Version 6 (IPv6)](https://www.rfc-editor.org/rfc/rfc8200): the IPv6 specification.
- [RFC 826 — An Ethernet Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc826): the original ARP specification.
- [RFC 9293 — Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293): the current consolidated TCP standard.
- [RFC 768 — User Datagram Protocol (UDP)](https://www.rfc-editor.org/rfc/rfc768): the UDP specification.
- [RFC 1034 — Domain Names: Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034): foundational DNS concepts. DNS has been extended by later standards; use this as an introduction, not the only DNS reference.
- [RFC 2131 — Dynamic Host Configuration Protocol](https://www.rfc-editor.org/rfc/rfc2131): DHCPv4 operation.
- [IANA Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/): authoritative registered service and port information.

### Explanations and operating-system documentation

- [Cloudflare — Network layers](https://developers.cloudflare.com/fundamentals/reference/network-layers/): an accessible reference for the OSI layers and common protocol examples.
- [Microsoft Learn — Test-NetConnection](https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection): Windows network diagnostics.
- [Linux manual — ip-address](https://man7.org/linux/man-pages/man8/ip-address.8.html): inspecting and managing interface addresses. Use the read-only show form when learning.
- [Linux manual — ip-route](https://man7.org/linux/man-pages/man8/ip-route.8.html): routing-table commands. Use the read-only show form when learning.
- [Linux manual — ss](https://man7.org/linux/man-pages/man8/ss.8.html): local socket statistics and connection state.
- [FTC — How to Secure Your Home Wi-Fi Network](https://consumer.ftc.gov/articles/how-secure-your-home-wi-fi-network): practical home-router and wireless-security guidance.

---

**Stage 2 sequence:** Networking → Linux → Windows → Internet and Web fundamentals.

The next Stage 2 curriculum page after Networking is Linux.